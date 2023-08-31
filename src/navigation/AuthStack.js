import React from 'react';

import {Login, Signup} from '../screens';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
