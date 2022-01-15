import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SingInSingUp from './src/screens/SingInSingUp';
import PaymentPage from './src/screens/PaymentPage';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Shoes', headerTitleAlign: 'center' }} />
                    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ title: 'Checkout', headerTitleAlign: 'center' }} />
                    <Stack.Screen name="SingInScreen" component={SingInSingUp} options={{ title: 'Checkout', headerTitleAlign: 'center' }} />
                    <Stack.Screen name="PaymentScreen" component={PaymentPage} options={{ title: 'Payment', headerTitleAlign: 'center' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Navigation
