import React,{ useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as strings from '../strings'
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager,AccessToken,GraphRequest,GraphRequestManager,} from 'react-native-fbsdk';
import store from '../authStore';

const Login = () => {
    var state = store.getState()
    store.subscribe( () => {
      state = store.getState()
    })
    
    const GoogleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {accessToken, idToken} = await GoogleSignin.signIn();
          const credential = auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );
          await auth().signInWithCredential(credential);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert('Signin with Google canceled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signin in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('Play services not available');
          } else {
            alert('Something went wrong '+error);
          }
        }
    };

    useEffect(() => {
        GoogleSignin.configure({
          scopes: ['email','profile'],
          webClientId:'984194899889-g79k8ep9kj04qq1ntkiptbo0v3hq5hmb.apps.googleusercontent.com',
          offlineAccess: true,
        });
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    function onAuthStateChanged(user) {
        console.log(user);
        if (user) {
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            user,
          })
        }
    }

    const GoogleLogout = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          await auth().signOut().then(() => 
          store.dispatch({
            type: 'LOGOUT_SUCCESS',
          }));
        } catch (error) {
          console.error(error);
        }
    };

    const FacebookLogout = async() => {
      try{
        LoginManager.logOut();
        await auth().signOut().then(() => 
            store.dispatch({
              type: 'LOGOUT_SUCCESS',
            }));
      }
      catch(error){
        console.error(error);
      }
    };

    const getInfoFromToken = token => {
      const PROFILE_REQUEST_PARAMS = {
        fields: {
          string: 'id,name,first_name,last_name',
        },
    };
    
    const profileRequest = new GraphRequest(
        '/me',
        {token, parameters: PROFILE_REQUEST_PARAMS},
        (error, user) => {
          if (error) {
            console.log('login info has error: ' + error);
          } else {
            console.log('result:', user);
          }
        },
      );
      new GraphRequestManager().addRequest(profileRequest).start();
    };

    const FacebookLogin = () => {
      // Attempt a login using the Facebook login dialog asking for default permissions.
      LoginManager.logInWithPermissions(['public_profile']).then(
        login => {
          if (login.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log("access token: "+data.accessToken)
              getInfoFromToken(data.accessToken.toString());
              // Create a Firebase credential with the AccessToken
              const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
              // Sign-in the user with the credential
              return auth().signInWithCredential(facebookCredential);
            });
          }
        },
        error => {
          console.log('Login fail with error: ' + error);
        },
      );
    };

  return (
    <View style={styles.view_style}>

        <View style={styles.main_container_style}>
            <Text style={styles.title_style}>{strings.login_title}</Text>
            <Text style={styles.subtitle_style}>{strings.login_subtitle}</Text>
        </View>

        <View style={styles.options_container_style}>
            <Text style={styles.text_style} onPress={FacebookLogin}>{strings.login_facebook}</Text>
            <Text style={styles.text_style} onPress={GoogleLogin}>{strings.login_google}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
title_style: {
    fontSize:32,
    marginBottom:16,
    fontFamily: "Assistant-Bold"

},
subtitle_style: {
    fontSize:28,
},
text_style: { 
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:24,
    margin:15,
    padding:10,
    borderRadius:15,
    backgroundColor:'white',
},
subtext_style: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    fontSize:18,
},
view_style: {
    flex: 4,
    padding: 30,
    backgroundColor:'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

main_container_style: {
    flex:2,
},

options_container_style: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
},

});

export default Login;