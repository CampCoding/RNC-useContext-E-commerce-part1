import React, {useContext, useState, useEffect} from 'react';

import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {AppContext} from '../../context/AppContextProvider';
import {COLORS, FONTS, SIZES} from '../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProductDetails = ({navigation, route}) => {
  const [psData, setPsData] = useState({});

  useEffect(() => {
    setPsData(route.params.psData);
  }, []);

  const {_addToCart, _addToFav, _decriseItem, _increaseItem, _deleteItem} =
    useContext(AppContext);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   height: 55,
          padding: SIZES.padding,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginRight: 30,
          }}>
          <AntDesign name="arrowleft" color={COLORS.black} size={30} />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          {psData?.product_name}
        </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: SIZES.padding,
          }}>
          <View>
            <Image
              source={{uri: psData?.product_url}}
              style={{
                width: '100%',
                height: 110,
              }}
              resizeMode="contain"
            />

            <TouchableOpacity
              onPress={() => {
                _addToFav(psData);
                setPsData({...psData, product_fav: !psData.product_fav});
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}>
              <MaterialCommunityIcons
                name={psData?.product_fav ? 'heart' : 'heart-outline'}
                size={24}
                color={psData?.product_fav ? COLORS.primary : COLORS.black}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
            }}>
            {psData?.product_name}
          </Text>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.darkGray2,
            }}>
            {psData?.product_desc}
          </Text>

          <View
            style={{
              marginTop: 5,
            }}>
            {psData?.product_count > 0 ? (
              <View
                style={{
                  flexDirection: 'row',

                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      _increaseItem(psData);
                      setPsData({
                        ...psData,
                        product_count: ++psData.product_count,
                      });
                    }}>
                    <Ionicons
                      name="add-circle"
                      size={24}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      ...FONTS.h3,
                      color: COLORS.black,
                      fontWeight: 'bold',
                    }}>
                    {psData?.product_count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      if (psData.product_count > 1) {
                        _decriseItem(psData);
                        setPsData({
                          ...psData,
                          product_count: --psData.product_count,
                        });
                      } else {
                        _deleteItem(psData);
                        setPsData({...psData, product_count: 0});
                      }
                    }}>
                    <MaterialCommunityIcons
                      name="minus-circle"
                      size={24}
                      color={COLORS.error}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    _deleteItem(psData);
                    setPsData({...psData, product_count: 0});
                  }}
                  style={{
                    width: 40,

                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: COLORS.error,
                    borderRadius: 5,

                    marginLeft: 10,
                  }}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={24}
                    color={COLORS.error}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <Button
                onPress={() => {
                  _addToCart(psData);
                  setPsData({...psData, product_count: 1});
                }}
                mode="contained"
                labelStyle={{
                  ...FONTS.h3,
                  color: COLORS.white,
                }}
                buttonColor={COLORS.primary}>
                Add To Cart
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
