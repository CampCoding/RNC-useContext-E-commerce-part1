import React from 'react';
import {View, Text} from 'react-native';

import {Home, Settings, Cart, ProductDetails} from '../screens';
import BottomTabs from './BottomTabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainApp" component={BottomTabs} />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
