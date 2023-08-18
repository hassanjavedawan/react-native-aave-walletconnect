import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {HStack, ScrollView} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useWalletConnect} from '@walletconnect/react-native-dapp';

const Wallet = ({navigation}) => {
  const connector = useWalletConnect();
  const ConnectWallet = async () => {
    await connector.connect().then(() => navigation.navigate('Home'));
    // navigation.navigate('Home');
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <HStack justifyContent={'center'}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </HStack>
          <HStack justifyContent={'center'}>
            <Image
              style={styles.img2}
              source={require('../../../assets/images/signin.png')}
              resizeMode="contain"
            />
          </HStack>
          <Text style={styles.text}>Please Connect Wallet </Text>
          <TouchableOpacity onPress={() => ConnectWallet()}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3F5CC8', '#E12160']}
              style={styles.linearGradient}>
              <Text style={styles.btn}>Connect Wallet</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '45%',
    aspectRatio: 1.8,
    height: undefined,
  },
  img2: {
    width: '65%',
    aspectRatio: 0.5,
    height: undefined,
  },
  text: {
    textAlign: 'center',
    color: '#010169',
    fontSize: 18,
    fontWeight: '500',
  },
  linearGradient: {
    marginTop: 50,
    marginHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    textTransform: 'uppercase',
    color: '#fff',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
