import React, { useEffect } from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import * as strings from "../strings";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";
import auth from "@react-native-firebase/auth";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";
import store from "../redux/store";
import * as constants from "../constants";
import { StackActions } from "@react-navigation/native";
import Colors from "../design/colors";
import {LoginButton} from "../components";
import {TopSection, FacebookLogo, GoogleLogo} from "../assets";

const Login = (props) => {
  var state = store.getState();
  store.subscribe(() => {
    state = store.getState();
  });

  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert("Signin with Google canceled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert("Signin in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert("Play services not available");
      } else {
        alert("Something went wrong " + error);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["email", "profile"],
      webClientId:
        "984194899889-g79k8ep9kj04qq1ntkiptbo0v3hq5hmb.apps.googleusercontent.com",
      offlineAccess: true,
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function onAuthStateChanged(user) {
    console.log(user);
    if (user) {
      store.dispatch({
        type: "LOGIN_SUCCESS",
        user,
      });

      const popAction = StackActions.pop(1);
      props.navigation.dispatch(popAction);
      props.navigation.navigate(constants.screen_main);
    }
  }
  const getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: "id,name,first_name,last_name",
      },
    };

    const profileRequest = new GraphRequest(
      "/me",
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, user) => {
        if (error) {
          console.log("login info has error: " + error);
        } else {
          console.log("result:", user);
        }
      }
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const FacebookLogin = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(["public_profile"]).then(
      (login) => {
        if (login.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            console.log("access token: " + data.accessToken);
            getInfoFromToken(data.accessToken.toString());
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken
            );
            // Sign-in the user with the credential
            return auth().signInWithCredential(facebookCredential);
          });
        }
      },
      (error) => {
        console.log("Login fail with error: " + error);
      }
    );
  };

  return (
    <View style={styles.view_style}>
      <TopSection style={styles.top_section} />

      <View style={styles.main_container_style}>
        <Text style={styles.title_style}>{strings.login_title}</Text>
        <Text style={styles.subtitle_style}>{strings.login_subtitle}</Text>

        <View style={styles.hyperlinks_view}>
          <Text
            style={styles.hyperlink_style}
            onPress={() =>
              Linking.openURL("https://nofarim.flycricket.io/terms.html")
            }
          >
            {strings.terms}
          </Text>

          <Text
            style={styles.hyperlink_style}
            onPress={() =>
              Linking.openURL("https://nofarim.flycricket.io/privacy.html")
            }
          >
            {strings.privacy}
          </Text>
        </View>

        <View style={styles.bottom_section}>
          <LoginButton
            borderStyle={styles.leftButtonStyle}
            title={strings.login_facebook}
            icon={<FacebookLogo style={styles.icon}></FacebookLogo>}
            onPress={FacebookLogin}
          />

          <LoginButton
            borderStyle={styles.rightButtonStyle}
            title={strings.login_google}
            icon={<GoogleLogo style={styles.icon}></GoogleLogo>}
            onPress={GoogleLogin}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view_style: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.dark_purple,
  },

  top_section: {
    flex: 0.1,
  },

  main_container_style: {
    flex: 1,
  },

  title_style: {
    fontSize: 40,
    paddingTop: 40,
    margin: 16,
    fontFamily: "Assistant-Bold",
    color: Colors.white,
  },

  subtitle_style: {
    fontSize: 24,
    marginHorizontal: 16,
    color: Colors.white,
    fontFamily: "Assistant-Regular",
  },

  hyperlinks_view: {
    flexDirection: "row-reverse",
    margin: 16,
  },

  hyperlink_style: {
    fontFamily: "Assistant-Regular",
    fontSize: 12,
    color: Colors.white,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },

  bottom_section: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  leftButtonStyle: {
    borderTopLeftRadius: 20,
  },
  rightButtonStyle: {
    borderTopRightRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Login;