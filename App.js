import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigations/MainNavigation';
import {withWalletConnect} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <MainNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
};

// export default App;

export default withWalletConnect(App, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'blockloan://',

  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
