import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage'; 
import ProductDetailPage from './pages/ProductDetailPage';
import VendedorProfile from './pages/VendedorProfile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
        <Stack.Screen name="VendedorProfile" component={VendedorProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
