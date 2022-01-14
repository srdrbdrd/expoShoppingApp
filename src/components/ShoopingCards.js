import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { convertHeight, convertWidth } from "../helpers/responsiveUiHelper";

const items = [
    {
        title: "Nike Air Max 90",
        brand: "Nike",
        price: "$70",
    },
    {
        title: "Nike Air Max 92",
        brand: "Nike",
        price: "$60",
    },
    {
        title: "Adidas Air Max 90",
        brand: "Adidas",
        price: "$55",
    },
    {
        title: "Puma Air Max 90",
        brand: "Puma",
        price: "$50",
    },
    {
        title: "Nike Air Max 93",
        brand: "Nike",
        price: "$53",
    },
    {
        title: "Nike Air Max 94",
        brand: "Nike",
        price: "$24",
    },
    {
        title: "Nike Air Max 94",
        brand: "Nike",
        price: "$15",
    },
];

const ShoopingCards = (props) => {
    return (
        <View
            style={{
                borderRadius: convertWidth(10),
                padding: convertWidth(8),
                borderColor: "#d3d3d3",
                borderWidth: convertWidth(1),
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
                {items[2].title}
            </Text>
            <Text
                style={{
                    fontSize: convertWidth(14),
                    marginLeft: convertWidth(6),
                    marginTop: convertWidth(4),
                    color: "grey",
                }}
            >
                {items[3].brand}
            </Text>
            <Text
                style={{
                    fontSize: convertWidth(16),
                    marginLeft: convertWidth(6),
                    marginTop: convertWidth(4),
                    fontWeight: "bold",
                }}
            >
                {items[0].price}
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
