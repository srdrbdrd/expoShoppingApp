import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import CheckoutScreen from './src/screens/CheckoutScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Shoes', headerTitleAlign: 'center' }} />
                    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ title: 'Checkout', headerTitleAlign: 'center' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Navigation
