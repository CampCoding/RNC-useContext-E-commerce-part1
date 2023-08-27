import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {COLORS, images} from './src/constants';
import * as Animatable from 'react-native-animatable';
const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={images.transLogo}
        style={{
          width: 200,
          height: 200,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
