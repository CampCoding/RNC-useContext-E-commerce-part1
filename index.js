/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppContextProvider from './src/context/AppContextProvider';
import UserContextProvider from './src/context/UserContextProvider';
const MainApp = () => {
  return (
    <UserContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </UserContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
