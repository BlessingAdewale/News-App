import React, { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

export function pushNotification(props: { navigation: { navigate: (arg0: {}) => void } }) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token as string));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification as any);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      //  console.log(response);
      const {
        notification: {
          request: {
            content: {
              data: { screen },
            },
          },
        },
      } = response;
      //when the user taps on the notification, this line checks if they //are suppose to be taken to a particular screen
      if (screen) {
        props.navigation.navigate(screen);
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current!);
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
  }, []);

  return {
    pushNotification,
  };
}

async function registerForPushNotificationsAsync() {
  let token;
  // tells you if the app is running on a physical device or an emulator or simulator
  if (Constants.Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
      console.log('existingStatus', existingStatus);
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      console.log('finalStatus', finalStatus);
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      showBadge: true,
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FE9018',
    });
  }

  return token;
}
