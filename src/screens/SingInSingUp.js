import React, { useState } from 'react'
import { Button, TextInput, Snackbar } from 'react-native-paper';
import { ScrollView, View, Text } from 'react-native';
import { convertHeight, convertWidth } from '../helpers/responsiveUiHelper';


const SingInSingUp = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const checkout = () => {
        if (!name.trim() || !email.trim() || !password.trim() || !repeatPassword.trim()) {
            onToggleSnackBar()
        } else {
            props.navigation.navigate("PaymentScreen")
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }} >
            <Text style={{ alignSelf: 'center', fontSize: convertWidth(24), color: '#FFA500', fontWeight: '700', marginTop: convertWidth(30) }}>Sing up for checkout</Text>
            <TextInput
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
                mode='outlined'
                style={{ margin: convertWidth(16), backgroundColor: 'white' }}
                activeOutlineColor='#FFB52E'
            />
            <TextInput
                label="E mail"
                value={email}
                onChangeText={text => setEmail(text)}
                mode='outlined'
                style={{ margin: convertWidth(16), backgroundColor: 'white' }}
                activeOutlineColor='#FFB52E'
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                mode='outlined'
                style={{ margin: convertWidth(16), backgroundColor: 'white' }}
                activeOutlineColor='#FFB52E'

            />
            <TextInput
                label="Repeat Password"
                value={repeatPassword}
                onChangeText={text => setRepeatPassword(text)}
                mode='outlined'
                style={{ margin: convertWidth(16), backgroundColor: 'white' }}
                activeOutlineColor='#FFB52E'
            />
            <Button color='#FFB52E' mode="contained" onPress={() => checkout()} style={{ margin: convertWidth(16) }} labelStyle={{ fontSize: convertWidth(16), fontWeight: '700', color: '#2E2E2E' }} >
                Sing up & Proceed to checkout
            </Button>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={1000}
            >
                Please fill the all fields
            </Snackbar>

        </ScrollView >
    );
};

export default SingInSingUp
