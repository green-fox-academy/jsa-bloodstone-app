import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, Image, StyleSheet,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import loadingIcon from '../../assets/loadingIcon.gif';
import loadingKnight from '../../assets/loadingKnight.gif';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(65,65,65)',
  },
});

function AuthLoadingScreen() {
  const navigation = useNavigation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  setTimeout(() => {
    if (isLoggedIn) {
      return navigation.navigate('Home');
    }
    return navigation.navigate('Auth');
  }, 8000);

  return (
    <View style={styles.container}>
      <Image style={{ height: 200, width: 300, marginBottom: 100 }} source={loadingKnight} />
      <Image style={{ height: 50, width: 50 }} source={loadingIcon} />
    </View>
  );
}

export default AuthLoadingScreen;
