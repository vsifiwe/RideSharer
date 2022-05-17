import React from 'react'
import MapPage from '../screens/MapPage'
import Home from '../screens/Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Map" component={MapPage} />
      </Stack.Navigator>
  )
}

export default HomeStack