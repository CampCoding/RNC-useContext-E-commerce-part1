import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import BottomTabs from './src/navigation/BottomTabs';
import AppStack from './src/navigation/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './src/context/AppContextProvider';
const App = () => {
  const {setData} = useContext(AppContext);
  const [splashTimer, setSplashTimer] = useState(true);

  useEffect(() => {
    _getData();
    setTimeout(() => {
      setSplashTimer(false);
    }, 2000);
  }, []);

  async function _getData() {
    // let alldata = [
    //   {
    //     product_id: 1,
    //     product_name: 'T-Shirt 1',
    //     product_url:
    //       'https://freepngimg.com/thumb/dress%20shirt/17-dress-shirt-png-image-thumb.png',
    //     product_price: 110,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'T-Shirt T-Shirt T-Shirt T-ShirtT-Shirt T-ShirtT-ShirtT-ShirtT-Shirt T-ShirtT-ShirtT-ShirtT-ShirtT-Shirt',
    //   },
    //   {
    //     product_id: 2,
    //     product_name: 'Baseball Cap',
    //     product_url:
    //       'https://freepngimg.com/thumb/cap/4-baseball-cap-png-image-thumb.png',
    //     product_price: 60,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Baseball Cap Png Image Baseball Cap Png Image Baseball Cap Png ImageBaseball Cap Png Image Baseball Cap Png Image',
    //   },
    //   {
    //     product_id: 3,
    //     product_name: 'Hat Png Image',
    //     product_url:
    //       'https://freepngimg.com/thumb/hat/3-hat-png-image-thumb.png',
    //     product_price: 60,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Hat Png Image Hat Png ImageHat Png ImageHat Png ImageHat Png Image Hat Png Image Hat Png ImageHat Png ImageHat Png ImageHat Png Image',
    //   },
    //   {
    //     product_id: 4,
    //     product_name: 'Sunglasses Photos',
    //     product_url:
    //       'https://freepngimg.com/thumb/sunglasses/25303-8-sunglasses-photos-thumb.png',
    //     product_price: 200,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Sunglasses Photos Sunglasses PhotosSunglasses PhotosSunglasses PhotosSunglasses PhotosSunglasses PhotosSunglasses PhotosSunglasses PhotosSunglasses Photos  Sunglasses PhotosSunglasses PhotosSunglasses Photos',
    //   },
    //   {
    //     product_id: 5,
    //     product_name: 'White T-Shirt',
    //     product_url:
    //       'https://freepngimg.com/thumb/tshirt/4-white-t-shirt-png-image-thumb.png',
    //     product_price: 110,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'White T-Shirt White T-Shirt White T-ShirtWhite T-ShirtWhite T-ShirtWhite T-ShirtWhite T-ShirtWhite T-ShirtWhite T-Shirt',
    //   },
    //   {
    //     product_id: 6,
    //     product_name: 'Nike Shoes',
    //     product_url:
    //       'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png',
    //     product_price: 300,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Nike ShoesNike ShoesNike Shoes Nike ShoesNike ShoesNike ShoesNike ShoesNike ShoesNike ShoesNike ShoesNike Shoes',
    //   },
    //   {
    //     product_id: 7,
    //     product_name: 'Jacket ',
    //     product_url:
    //       'https://freepngimg.com/thumb/jacket/16-jacket-png-image-thumb.png',
    //     product_price: 350,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Jacket  Jacket  Jacket  Jacket  Jacket Jacket Jacket Jacket Jacket ',
    //   },
    //   {
    //     product_id: 8,
    //     product_name: 'Baseball Cap',
    //     product_url:
    //       'https://freepngimg.com/thumb/cap/18-baseball-cap-png-image-thumb.png',
    //     product_price: 75,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'TBaseball Cap Baseball Cap Baseball Cap Baseball CapBaseball Cap v Baseball Cap Baseball Cap ',
    //   },
    //   {
    //     product_id: 9,
    //     product_name: 'Military Backpack',
    //     product_url:
    //       'https://freepngimg.com/thumb/backpack/7-military-backpack-png-image-thumb.png',
    //     product_price: 110,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Military Backpack Military Backpack Military Backpack Military Backpack Military Backpack Military BackpackMilitary Backpack',
    //   },
    //   {
    //     product_id: 10,
    //     product_name: 'Leather Jacket',
    //     product_url:
    //       'https://freepngimg.com/thumb/jacket/2-leather-jacket-png-image-thumb.png',
    //     product_price: 600,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Leather Jacket v Leather Jacket Leather JacketLeather Jacket Leather Jacket Leather JacketLeather Jacket',
    //   },
    //   {
    //     product_id: 11,
    //     product_name: 'Women Shoes',
    //     product_url:
    //       'https://freepngimg.com/thumb/women%20shoes/3-women-shoes-png-image-thumb.png',
    //     product_price: 110,
    //     product_fav: false,
    //     product_count: 0,
    //     product_desc:
    //       'Women Shoes Women Shoes Women ShoesWomen ShoesWomen Shoes Women ShoesWomen Shoes Women ShoesWomen Shoes',
    //   },
    // ];

    // await AsyncStorage.setItem('store', JSON.stringify(alldata));
    let storeData = await AsyncStorage.getItem('store');

    if (storeData != null) {
      storeData = JSON.parse(storeData);
      setData(storeData);
    }
  }
  if (splashTimer) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
