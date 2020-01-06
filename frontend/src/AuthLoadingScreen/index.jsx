import React from 'react';
import { useSelector } from 'react-redux';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

function AuthLoadingScreen() {
  const navigation = useNavigation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return navigation.navigate('Home');
  }
  if (!isLoggedIn) {
    return navigation.navigate('Auth');
  }
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
}

export default AuthLoadingScreen;
