import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {HStack, ScrollView, VStack, Divider} from 'native-base';
import BarrowTab from '../../components/Home/BarrowTab';
import DepositTab from '../../components/Home/DepositTab';

const Home = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [show, setShow] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // console.log(show);
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

          {show ? (
            <BarrowTab mystate={setShow} />
          ) : (
            <DepositTab mystate={setShow} />
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
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
  numb: {
    color: '#fff',
    fontSize: 45,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  // linearGradient:{
  //     borderRadius: 5,
  // },
  // btnMain:{
  //     paddingHorizontal: 16
  // },
  // deposit_btn:{
  //     textTransform:'capitalize',
  //     paddingVertical: 18,
  //     fontSize: 15,
  //     letterSpacing: 0.5,
  //     backgroundColor: '#fff',
  //     paddingHorizontal: 50,
  //     borderRadius: 5,

  // },
  // borrow_btn:{
  //     textTransform:'capitalize',
  //     paddingVertical: 18,
  //     fontSize: 15,
  //     letterSpacing: 0.5,
  //     paddingHorizontal: 50,
  //     color: '#fff',
  // },
  // card_sec_main:{
  //     marginHorizontal: 16,
  //     marginBottom: 12
  // },
  // cardMain:{
  //     backgroundColor: '#fff',
  //     paddingHorizontal: 14,
  //     paddingVertical: 16,
  //     borderRadius: 6,
  //     marginVertical:5
  // },
  // cardImg:{
  //     width: '12%',
  //     aspectRatio: 1,
  //     height: undefined
  // }
});
