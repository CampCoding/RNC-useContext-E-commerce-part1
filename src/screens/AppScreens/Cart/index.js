import React, {useContext, useState, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {AppContext} from '../../../context/AppContextProvider';
import {COLORS, FONTS, SIZES} from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Cart = ({navigation}) => {
  const [cartData, setCartData] = useState([]);
  const {
    storeData,
    _addToCart,
    _addToFav,
    _decriseItem,
    _increaseItem,
    _deleteItem,
  } = useContext(AppContext);

  useEffect(() => {
    getCartData();
  }, [storeData]);

  async function getCartData() {
    setCartData(storeData.filter(item => item.product_count != 0));
  }

  function getTotalPrices() {
    let total = 0;

    total = cartData.reduce((comp, currentItem) => {
      return comp + currentItem.product_count * currentItem.product_price;
    }, total);
    return total;
  }

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   height: 55,
          padding: SIZES.radius,
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
          Cart
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
      <FlatList
        data={cartData}
        contentContainerStyle={{
          padding: SIZES.radius,
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: COLORS.white,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                borderRadius: SIZES.radius,
                padding: SIZES.radius,
                marginBottom: 15,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProductDetails', {
                      psData: item,
                    });
                  }}>
                  <Image
                    source={{uri: item.product_url}}
                    style={{
                      width: '100%',
                      height: 110,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    _addToFav(item);
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}>
                  <MaterialCommunityIcons
                    name={item.product_fav ? 'heart' : 'heart-outline'}
                    size={24}
                    color={item.product_fav ? COLORS.primary : COLORS.black}
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.black,
                }}>
                {item.product_name}
              </Text>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.black,
                }}>
                {item.product_price} LE
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  ...FONTS.h4,
                  color: COLORS.darkGray2,
                }}>
                {item.product_desc}
              </Text>

              <View
                style={{
                  marginTop: 5,
                }}>
                {item.product_count > 0 ? (
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
                          _increaseItem(item);
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
                        {item.product_count}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          if (item.product_count > 1) {
                            _decriseItem(item);
                          } else {
                            _deleteItem(item);
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
                        _deleteItem(item);
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
                      _addToCart(item);
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
          );
        }}
      />

      <View
        style={{
          backgroundColor: COLORS.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          padding: SIZES.radius,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              fontWeight: 'bold',
            }}>
            Total Price:{' '}
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
              fontWeight: 'bold',
            }}>
            {getTotalPrices()} LE
          </Text>
        </View>
        <Button
          style={{
            borderRadius: 15,
          }}
          buttonColor={COLORS.primary}
          mode="contained"
          labelStyle={{
            ...FONTS.h3,
            color: COLORS.white,
          }}>
          Checkout
        </Button>
      </View>
    </View>
  );
};

export default Cart;
