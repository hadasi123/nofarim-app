import React,{ useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as strings from '../strings'
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';


const Login = () => {

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    
    const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {accessToken, idToken} = await GoogleSignin.signIn();
          setloggedIn(true);
    
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
          scopes: ['email','profile'], // on behalf of the user
          webClientId:
            '984194899889-g79k8ep9kj04qq1ntkiptbo0v3hq5hmb.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);


    function onAuthStateChanged(user) {
        setUserInfo(user);
        console.log(user);
        if (user) setloggedIn(true);
    }

    const GoogleSignOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setUserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };

   return (
    <View style={styles.view_style}>

        <View style={styles.main_container_style}>
            <Text style={styles.title_style}>{strings.login_title}</Text>
            <Text style={styles.subtitle_style}>{strings.login_subtitle}</Text>
        </View>

        <View style={styles.options_container_style}>
            <Text style={styles.text_style} onPress={GoogleSignOut}>{strings.login_facebook}</Text>
            <Text style={styles.text_style} onPress={signInWithGoogle}>{strings.login_google}</Text>
            <Text style={styles.subtext_style}>{strings.login_guest}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
title_style: {
    fontSize:32,
    marginBottom:16,
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