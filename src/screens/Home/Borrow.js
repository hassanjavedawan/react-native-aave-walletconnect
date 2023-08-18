import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import {HStack, ScrollView} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {YOUR_PROVIDER_LINK_BSC} from '../../../env';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import Web3 from 'web3';

const Borrow = ({navigation}) => {
  const RPC_URL = `https://mainnet.infura.io/v3/${YOUR_PROVIDER_LINK_BSC}`;
  const web3 = useMemo(() => new Web3(RPC_URL), []);

  const handleBorrow = async () => {
    const lpAddressProviderAddress = 'LendingPoolAddressesProviderAddress'; // Replace with the actual address
    const asset = 'Ethereum'; // Replace with the desired asset
    const amount = 100; // Replace with the desired amount
    const interestRateModel = 'InterestRateModelAddress'; // Replace with the actual address
    const YOUR_ADDRESS = connector.accounts[0]; // Assuming you're using the first connected address

    const lpAddressProviderContract = new web3.eth.Contract(
      LendingPoolAddressesProviderABI,
      lpAddressProviderAddress,
    );
    const lpCoreAddress = await lpAddressProviderContract.methods
      .getLendingPoolCore()
      .call();

    const lpContract = new web3.eth.Contract(LendingPoolABI, lpCoreAddress);
    try {
      const tx = await lpContract.methods
        .borrow(asset, amount, interestRateModel)
        .send({from: YOUR_ADDRESS});
      console.log('Borrow transaction successful:', tx);
    } catch (error) {
      console.error('Error borrowing:', error);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <HStack justifyContent={'center'} marginTop={6}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </HStack>
         
          <Text style={styles.head}>WELCOME BACK!</Text>
            
          <Text style={styles.para}>Fill in your account using </Text>

          <TouchableOpacity onPress={handleBorrow}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3F5CC8', '#E12160']}
              style={styles.linearGradient}>
              <Text style={styles.btn}>Borrow from Aave</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Borrow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F4F7FC',
  },
  img: {
    width: '45%',
    aspectRatio: 3,
    height: undefined,
  },
  head: {
    textAlign: 'center',
    color: '#1D2126',
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  para: {
    textAlign: 'center',
    fontSize: 15,
    color: '#1D2126',
  },
  error: {
    fontSize: 15,
    color: 'red',
    fontWeight: 600,
  },
  label: {
    marginBottom: 2,
    fontSize: 15,
    color: '#767676',
    marginTop: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  linearGradient: {
    marginTop: 140,
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
