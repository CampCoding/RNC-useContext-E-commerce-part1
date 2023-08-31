import React, {useState, createContext} from 'react';
export const UserContext = createContext();
const UserContextProvider = ({children}) => {
  const [userData, setUserData] = useState({});

  const [isLogged, setIsLogged] = useState(false);

  function changeUserData(data) {
    setUserData(data);
  }

  function changeIsLogged() {
    setIsLogged(e => !e);
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        changeUserData,
        isLogged,
        changeIsLogged,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
