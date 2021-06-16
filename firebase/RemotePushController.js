import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { useEffect } from "react";

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("REMOTE NOTIFICATION ==>", notification);
        // process the notification here
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // Android only: GCM or FCM Sender ID
      senderID: "984194899889",
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};

export default RemotePushController;
