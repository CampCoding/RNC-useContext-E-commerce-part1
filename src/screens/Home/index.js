import React, {useState, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../../context/AppContextProvider';
import * as Animatable from 'react-native-animatable';
const Home = ({navigation}) => {
  const {
    storeData,
    _addToCart,
    _addToFav,
    _decriseItem,
    _increaseItem,
    _deleteItem,
  } = useContext(AppContext);

  function renderHeader() {
    return (
      <View
        style={{
          ...styles.headerContainer,
        }}>
        <View
          style={{
            width: 40,
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="database"
              size={35}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.primary,
              fontWeight: 'bold',
            }}>
            Home Page
          </Text>
        </View>
        <View
          style={{
            width: 40,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Foundation
              name="shopping-cart"
              color={COLORS.secondary}
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={{...styles.container}}>
      <FlatList
        data={storeData}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingHorizontal: SIZES.radius,
        }}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Animatable.View
              animation={'bounceInUp'}
              delay={100 * index}
              useNativeDriver
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
                width: '48%',
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
            </Animatable.View>
          );
        }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '50%',
            }}>
            <Image
              source={icons.empty}
              style={{
                width: 200,
                height: 200,
              }}
              resizeMode="contain"
            />
            <Text>There is no data</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    padding: SIZES.radius,
  },
});

export default Home;
