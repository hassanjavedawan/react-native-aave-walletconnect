import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Borrow from '../screens/Home/Borrow';
import Header from './Header';
import Wallet from '../screens/Home/Wallet';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <View style={styles.container}>
        {/* <Header /> */}

        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#39D98A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialRouteName="Wallet">
          <Stack.Screen
            name="Wallet"
            options={{headerShown: false}}
            component={Wallet}
          />
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="Borrow"
            options={{headerShown: false}}
            component={Borrow}
          />
        </Stack.Navigator>
      </View>
    </>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
