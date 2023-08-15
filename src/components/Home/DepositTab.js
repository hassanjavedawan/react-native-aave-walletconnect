import {StyleSheet, Text, View, TouchableOpacity,Image,Switch} from 'react-native';
import React,{useState} from 'react';
import {HStack, ScrollView, VStack,Divider } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { cardData } from '../../screens/Home/Data';

const DepositTab = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
       {/* Top Buttons */}
       <HStack style={styles.btnMain} justifyContent={'space-between'} alignItems={'center'} >
        <TouchableOpacity >
        <LinearGradient
        start={{x: 0, y: 1.5}} end={{x: 1, y: 1.7}}
        colors={['#3F5CC8', '#E12160']} style={styles.linearGradient}>
            <Text style={styles.deposit_btn}>
                Deposit
            </Text>
            </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.mystate(true)}>
            <Text style={styles.borrow_btn}>
                Borrow
            </Text>
        </TouchableOpacity>
        </HStack>
             {/* Top Buttons */}

            {/* Cards Section */}
                    <View style={styles.card_sec_main}>
            <Text style={{marginVertical: 16,fontSize: 22}}>Deposit</Text>
            {cardData.map((res) => {
                return(
            <View key={res.id} style={styles.cardMain}>
                <View style={styles.cardInner}>
                <HStack alignItems={'center'} >
                <Image style={styles.cardImg} source={res.image} resizeMode='contain'/>
                <Text style={{fontSize: 15,marginLeft: 10}}>{res.title}</Text>
                </HStack>
                <HStack alignItems={'center'} justifyContent={'space-between'} marginY={4}>
                    <VStack>
                        <Text style={{color: '#727C8E'}}>Wallet Balance</Text>
                        <Text style={{fontSize: 22}}>{res.balance}</Text>
                    </VStack>
                    <VStack>
                        <Text style={{color: '#727C8E'}}>YPI</Text>
                        <Text style={{fontSize: 22}}>{res.ypi}</Text>
                    </VStack>
                    <VStack>
                        <Text style={{color: '#727C8E'}}>Collateral</Text>
                        <Switch
                        trackColor={{false: '#3F5CC8', true: '#b92f79'}}
                        thumbColor={isEnabled ? '#3F5CC8' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        
                    />
                    </VStack>
                </HStack>
                <Text style={{color: '#727C8E'}}>{res.bottom_text}</Text>
                </View>
            </View>
                )
            })}
        
            </View>
            {/* Cards Section */}
    </>
  )
}

export default DepositTab

const styles = StyleSheet.create({
    linearGradient:{
        borderRadius: 5,
    },
    btnMain:{
        paddingHorizontal: 16
    },
    deposit_btn:{
        textTransform:'capitalize',
        paddingVertical: 18,
        fontSize: 15,
        letterSpacing: 0.5,
        paddingHorizontal: 50,
        color: '#fff',
    },
    borrow_btn:{
        textTransform:'capitalize',
        paddingVertical: 18,
        fontSize: 15,
        letterSpacing: 0.5,
        paddingHorizontal: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    card_sec_main:{
        marginHorizontal: 16,
        marginBottom: 12
    },
    cardMain:{
        backgroundColor: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 16,
        borderRadius: 6,
        marginVertical:5
    },
    cardImg:{
        width: '12%',
        aspectRatio: 1,
        height: undefined
    }
})