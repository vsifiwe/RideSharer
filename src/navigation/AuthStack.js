import React from 'react'
import SigninPage from '../screens/Signin'
import SignupPage from '../screens/Signup'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={SigninPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Signup" component={SignupPage} />
      </Stack.Navigator>
  )
}

export default HomeStack