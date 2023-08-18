import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useMemo, useCallback} from 'react';
import {HStack, ScrollView, VStack, Divider, Box, Input} from 'native-base';
import BarrowTab from '../../components/Home/BarrowTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import Web3 from 'web3';
import {YOUR_PROVIDER_LINK} from '../../../env';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {handleBorrow, handleDeposit} from '../../redux/actions';

const Home = ({navigation}) => {
  const web3 = useMemo(
    () => new Web3(new Web3.providers.HttpProvider(YOUR_PROVIDER_LINK)),
    [],
  );
  const dispatch = useDispatch();
  const connector = useWalletConnect();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [amount, setAmount] = React.useState('0');
  const [Payable, setPayable] = React.useState('0');
  const [account, setAccount] = React.useState('0');

  const errorText = useSelector(store => store.errorText);
  const successText = useSelector(store => store.successText);

  const depositFun = useCallback(() => {
    dispatch(handleDeposit(connector, amount, Payable));
  }, [connector, dispatch]);

  const borrowFun = useCallback(() => {
    dispatch(handleBorrow(connector, account));
  }, [connector, dispatch]);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* Top Image */}
          <HStack justifyContent={'center'}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/logo.png')}
              resizeMode="contain"
            />
          </HStack>
          {/* Top Image */}

          {/* Hero Image */}
          <HStack justifyContent={'center'}>
            <ImageBackground
              style={styles.img2}
              source={require('../../../assets/images/Group.png')}
              resizeMode="contain">
              <Image
                style={styles.left}
                source={require('../../../assets/images/left.png')}
                resizeMode="contain"
              />
              <Image
                style={styles.right}
                source={require('../../../assets/images/right.png')}
                resizeMode="contain"
              />
              <HStack justifyContent={'center'} marginTop={35}>
                <VStack justifyContent={'center'} alignItems={'center'}>
                  <Text style={styles.numb}>715</Text>
                  <Text style={styles.title}>CRYPTO{'\n'}BALANCE</Text>
                </VStack>
                <Divider
                  orientation="vertical"
                  mx="10"
                  thickness="2"
                  h="78"
                  style={{marginTop: 15}}
                  _light={{
                    bg: 'muted.300',
                  }}
                  _dark={{
                    bg: 'muted.40',
                  }}
                />
                <VStack justifyContent={'center'} alignItems={'center'}>
                  <Text style={styles.numb}>715</Text>
                  <Text style={styles.title}>LOAN{'\n'}BALANCE</Text>
                </VStack>
              </HStack>
            </ImageBackground>
          </HStack>
          {/* Hero Image */}
          {/* Top Buttons */}
          <HStack
            style={styles.btnMain}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.deposit_btn}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible1(true)}>
              <LinearGradient
                start={{x: 0, y: 1.5}}
                end={{x: 1, y: 1.7}}
                colors={['#3F5CC8', '#E12160']}
                style={styles.linearGradient}>
                <Text style={styles.borrow_btn}>Borrow</Text>
              </LinearGradient>
            </TouchableOpacity>
          </HStack>
          <BarrowTab />
          {/* Top Buttons */}
        </ScrollView>
      </View>
      {/* deposit  Model start */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() =>
            modalVisible ? setModalVisible(!modalVisible) : null
          }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <View
                style={{
                  justifyContent: 'space-between',
                  width: '100%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <Text style={[styles.label, {color: '#010169'}]}></Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon
                    name="times-circle-o"
                    style={[styles.label, {color: 'gray'}]}
                  />
                </TouchableOpacity>
              </View> */}

              <Text style={styles.label}>
                Enter the amount you {'\n'} wish to deposit.
              </Text>
              <Box style={{width: '100%'}} mt="2">
                {/* <Input
                  size="md"
                  onChangeText={itemValue => setPayable(itemValue)}
                  placeholder="Enter payable amount (MATIC)"
                  shadow="1"
                  bg="#fff"
                  variant="filled"
                  style={{width: '100%'}}
                /> */}
                <Input
                  size="md"
                  onChangeText={itemValue => setAmount(itemValue)}
                  placeholder="Enter amount here"
                  shadow="1"
                  isRequired={true}
                  bg="#fff"
                  variant="filled"
                  style={{width: '100%'}}
                />
              </Box>

              <Box style={{width: '90%', marginTop: 20}}>
                <TouchableOpacity onPress={depositFun}>
                  <LinearGradient
                    start={{x: 0, y: 1.5}}
                    end={{x: 1, y: 1.7}}
                    colors={['#3F5CC8', '#E12160']}
                    style={styles.linearGradient}>
                    <Text style={styles.borrow_btn}>Confirm</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Box>
              <Box>
                {errorText ? (
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'red',
                      alignSelf: 'center',
                    }}>
                    {errorText}
                  </Text>
                ) : null}
                {successText ? (
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#39D98A',
                      alignSelf: 'center',
                    }}>
                    {successText}
                  </Text>
                ) : null}
              </Box>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* end */}
      {/* deposit  Model start */}
      <Modal animationType="slide" transparent={true} visible={modalVisible1}>
        <TouchableWithoutFeedback
          onPress={() =>
            modalVisible1 ? setModalVisible1(!modalVisible1) : null
          }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.label}>
                Enter the account {'\n'} to borrow.
              </Text>
              <Box style={{width: '100%'}} mt="2">
                <Input
                  size="md"
                  onChangeText={itemValue => setAccount(itemValue)}
                  placeholder="Enter account here"
                  shadow="1"
                  bg="#fff"
                  isRequired
                  variant="filled"
                  style={{width: '100%'}}
                />
              </Box>

              <Box style={{width: '90%', marginTop: 20}}>
                
                <TouchableOpacity onPress={borrowFun}>
                  <LinearGradient
                    start={{x: 0, y: 1.5}}
                    end={{x: 1, y: 1.7}}
                    colors={['#3F5CC8', '#E12160']}
                    style={styles.linearGradient}>
                    <Text style={styles.borrow_btn}>Confirm</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Box>
              <Box>
                {errorText ? (
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'red',
                      alignSelf: 'center',
                    }}>
                    {errorText}
                  </Text>
                ) : null}
                {successText ? (
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#39D98A',
                      alignSelf: 'center',
                    }}>
                    {successText}
                  </Text>
                ) : null}
              </Box>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* end */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  linearGradient: {
    borderRadius: 5,
  },
  btnMain: {
    paddingHorizontal: 16,
  },
  deposit_btn: {
    textTransform: 'capitalize',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  borrow_btn: {
    textTransform: 'capitalize',
    paddingVertical: 18,
    fontSize: 15,
    letterSpacing: 0.5,
    paddingHorizontal: 50,
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
  },
  img: {
    width: '45%',
    aspectRatio: 1.8,
    height: undefined,
  },
  img2: {
    width: '100%',
    aspectRatio: 2,
    height: undefined,
  },
  left: {
    width: '40%',
    aspectRatio: 1.4,
    height: undefined,
    position: 'absolute',
    bottom: 20,
    left: -14,
  },
  right: {
    width: '40%',
    aspectRatio: 1.4,
    height: undefined,
    position: 'absolute',
    top: 0,
    right: -15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
    color: 'red',
  },
  numb: {
    color: '#fff',
    fontSize: 45,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    width: '90%',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
