import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../../context/UserContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({}) => {
  const navigation = useNavigation();
  const {changeUserData, changeIsLogged} = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={async () => {
          let userData = {user_id: 1, user_name: 'Reem', user_image: ''};
          await AsyncStorage.setItem('userAccount', JSON.stringify(userData));
          changeUserData(userData);
          changeIsLogged();
        }}
        style={{
          width: '90%',
          backgroundColor: 'lightgray',

          padding: 10,
          borderRadius: 15,
          marginBottom: 20,
        }}>
        <Text>Go Inside App</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={{
          width: '90%',
          backgroundColor: 'lightgray',
          padding: 10,
          borderRadius: 15,
          marginBottom: 20,
        }}>
        <Text>Go to Signup</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default Login;
