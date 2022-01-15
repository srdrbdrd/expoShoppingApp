import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { convertHeight, convertWidth } from "../helpers/responsiveUiHelper";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { checkOut } from "../redux/actions";
import { CommonActions } from '@react-navigation/native';


const PaymentPage = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const paymentComplete = () => {
        setModalVisible(true);
        setTimeout(() => {
            dispatch(checkOut)
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'HomeScreen' }]
                })
            );
        }, 2000);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(192,192,192,0.7)',

                }}>
                    <View style={{

                        backgroundColor: 'white',
                        borderRadius: convertWidth(20),
                        padding: convertWidth(36),
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        <Text style={{ fontSize: convertWidth(16), padding: convertWidth(8) }}>Payment Completed</Text>
                        <Text style={{ fontSize: convertWidth(16), padding: convertWidth(8) }}>Thank you</Text>
                    </View>
                </View>
            </Modal>
            <Text style={{ fontSize: convertWidth(28), padding: convertWidth(8) }}>Select payment method</Text>
            <TouchableOpacity
                style={{
                    margin: convertWidth(30),
                    flexDirection: "row",
                    borderRadius: convertWidth(30),
                    justifyContent: "center",
                    backgroundColor: "#169BD7",
                    width: convertWidth(250),
                    height: convertHeight(100),
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}
                onPress={() => paymentComplete()}
            >
                <Entypo name="paypal" size={convertWidth(56)} color="black" />
                <Text
                    style={{ fontSize: convertWidth(28), padding: convertWidth(8) }}
                >
                    Paypal
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    margin: convertWidth(30),
                    flexDirection: "row",
                    borderRadius: convertWidth(30),
                    justifyContent: "center",
                    backgroundColor: "#FFB52E",
                    width: convertWidth(250),
                    height: convertHeight(100),
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                }}
                onPress={() => paymentComplete()}
            >
                <AntDesign name="creditcard" size={convertWidth(56)} color="black" />
                <Text
                    style={{ fontSize: convertWidth(28), padding: convertWidth(8) }}
                >
                    Credit Card
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentPage;
