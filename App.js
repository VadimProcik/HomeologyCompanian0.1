import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientHomePage from './screens/ClientHomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="ClientHome" component={ClientHomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}