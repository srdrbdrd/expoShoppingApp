import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { convertHeight, convertWidth } from "../helpers/responsiveUiHelper";



const CheckoutItems = (props) => {
    return (

        <View
            style={{
                margin: convertWidth(12),
                flexDirection: 'row',
                width: Dimensions.get('screen').width * 0.95,
                borderWidth: convertWidth(0.4)
            }}
        >
            <Image
                source={require("../assets/shoe.jpg")}
                resizeMode="contain"
                style={{
                    width: convertWidth(120),
                    height: convertWidth(120),
                    borderRadius: convertWidth(10),
                }}
            />
            <View style={{ justifyContent: 'center', flex: 3 }}>
                <Text
                    style={{
                        fontSize: convertWidth(16),
                        marginLeft: convertWidth(6),
                        marginTop: convertWidth(4),
                        fontWeight: "700",
                    }}
                >
                    {props.title}
                </Text>
                <Text
                    style={{
                        fontSize: convertWidth(14),
                        marginLeft: convertWidth(6),
                        marginTop: convertWidth(4),
                        color: "grey",
                    }}
                >
                    {props.brand}
                </Text>
                <Text
                    style={{
                        fontSize: convertWidth(16),
                        marginLeft: convertWidth(6),
                        marginTop: convertWidth(4),
                        fontWeight: "bold",
                    }}
                >
                    {props.price + '$'}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginVertical: convertHeight(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#ededed",
                    borderRadius: convertWidth(6),
                    marginRight: convertWidth(10)
                }}
                onPress={props.onPress}
            >
                <Text style={{ fontSize: convertWidth(14), fontWeight: "bold" }}>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>

    );
};

export default CheckoutItems;


