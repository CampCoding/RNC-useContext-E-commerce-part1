import React, {useContext} from 'react';

import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {UserContext} from '../../../context/UserContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const {changeUserData, changeIsLogged} = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        // buttonColor="white"
        onPress={async () => {
          changeUserData({});
          changeIsLogged();

          await AsyncStorage.removeItem('userAccount');
        }}
        mode="outlined"
        labelStyle={{
          color: 'red',
        }}
        style={{
          borderColor: 'red',
          width: '90%',
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Settings;
