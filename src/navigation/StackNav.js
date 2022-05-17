import React, { useContext, useState, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack'
import {AuthContext} from './AuthProvider'
import auth from '@react-native-firebase/auth'

const StackNav = () => {
  
  const { user, setUser } = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {  
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])


  if (initializing) return null;
  

  return (
    <NavigationContainer>
      { user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default StackNav