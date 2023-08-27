import React, {useState, createContext} from 'react';
export const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppContextProvider = ({children}) => {
  const [storeData, setStoreData] = useState([]);

  function setData(data) {
    setStoreData(data);
  }
  function _addToCart(psItem) {
    let woholeData = [...storeData];
    let newArr = woholeData.map(item => {
      return psItem.product_id == item.product_id
        ? {...item, product_count: 1}
        : item;
    });

    setStoreData(newArr);
    _newAsyncStorage(newArr);
  }
  function _increaseItem(psItem) {
    let woholeData = [...storeData];
    let newArr = woholeData.map(item => {
      return psItem.product_id == item.product_id
        ? {...item, product_count: ++item.product_count}
        : item;
    });

    setStoreData(newArr);
    _newAsyncStorage(newArr);
  }
  function _decriseItem(psItem) {
    let woholeData = [...storeData];
    let newArr = woholeData.map(item => {
      return psItem.product_id == item.product_id
        ? {...item, product_count: --item.product_count}
        : item;
    });

    setStoreData(newArr);
    _newAsyncStorage(newArr);
  }
  function _deleteItem(psItem) {
    let woholeData = [...storeData];
    let newArr = woholeData.map(item => {
      return psItem.product_id == item.product_id
        ? {...item, product_count: 0}
        : item;
    });

    setStoreData(newArr);
    _newAsyncStorage(newArr);
  }

  function _addToFav(psItem) {
    let woholeData = [...storeData];
    let newArr = woholeData.map(item => {
      return psItem.product_id == item.product_id
        ? {...item, product_fav: !item.product_fav}
        : item;
    });

    setStoreData(newArr);
    _newAsyncStorage(newArr);
  }

  async function _newAsyncStorage(arr) {
    await AsyncStorage.setItem('store', JSON.stringify(arr));
  }
  return (
    <AppContext.Provider
      value={{
        storeData,
        setData,
        _addToCart,
        _addToFav,
        _decriseItem,
        _increaseItem,
        _deleteItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
