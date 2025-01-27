import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientHomePage from './screens/ClientHomePage';
import AdminHomePage from './screens/AdminHomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
         {/*<Stack.Screen name="ClientHome" component={ClientHomePage} />*/}
        <Stack.Screen name="AdminHome" component={AdminHomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}