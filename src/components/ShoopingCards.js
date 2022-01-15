import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { convertHeight, convertWidth } from "../helpers/responsiveUiHelper";



const ShoopingCards = (props) => {
    return (
        <View
            style={{
                borderRadius: convertWidth(10),
                padding: convertWidth(8),
                borderColor: "#d3d3d3",
                borderWidth: convertWidth(1),
                width: convertWidth(170),
                margin: convertWidth(12),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,

            }}
        >
            <Image
                source={require("../assets/shoe.jpg")}
                resizeMode="contain"
                style={{
                    width: convertWidth(150),
                    height: convertWidth(150),
                    borderRadius: convertWidth(10),
                }}
            />
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
                {props.price}
            </Text>
            <TouchableOpacity
                style={{
                    alignSelf: "flex-end",
                    backgroundColor: "#ededed",
                    paddingHorizontal: convertWidth(20),
                    paddingVertical: convertWidth(4),
                    borderRadius: convertWidth(6),
                }}
                onPress={props.onPress}
            >
                <Text style={{ fontSize: convertWidth(14), fontWeight: "bold" }}>
                    Add
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ShoopingCards;

const styles = StyleSheet.create({});
