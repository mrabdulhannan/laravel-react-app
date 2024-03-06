import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Danish'
  });
  // const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  // const [token, _setToken] = useState(123);
  const [token, _setToken] = useState(null);
  const [notification, _setNotification] = useState('');

  useEffect(() => {
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }, [token]);

  const setToken = (token) => {
    _setToken(token);
  };

  const setNotification = message => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification('')
    }, 5000);
  }

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
