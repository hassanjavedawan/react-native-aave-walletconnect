/* eslint-disable react/no-unstable-nested-components */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {Box, Divider, Menu, Select} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Linking} from 'react-native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={styles.innerView}>
        <TouchableOpacity>
          <Text>MY WALLET</Text>
        </TouchableOpacity>

        <View>
          <Box w="90%" alignItems="center">
            <Menu
              // style={{backgroundColor: '#141414'}}
              w="190"
              trigger={triggerProps => {
                return (
                  <TouchableOpacity {...triggerProps}>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                );
              }}>
              <Menu.Group title="Menu" _title={{color: '#000'}}>
                <Menu.Item
                  _text={{color: '#E12160', fontWeight: 600}}
                  onPress={() => navigation.navigate('Form')}>
                  <MaterialCommunityIcons
                    name="wallet"
                    style={{fontSize: 20}}
                    color="#E12160"
                  />
                  My Borrow
                </Menu.Item>
              </Menu.Group>
            </Menu>
          </Box>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F5F5F7',
  },
  topImg: {
    width: '100%',
    aspectRatio: 1,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
