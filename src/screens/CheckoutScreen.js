import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ViewCartButton from "../components/ViewCartButton";
import ShoopingCards from "../components/ShoopingCards";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/actions";
import CheckoutItems from "../components/CheckoutItems";
import { convertHeight } from "../helpers/responsiveUiHelper";

const CheckoutScreen = (props) => {
    const { items } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const totalUSD = items
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0)
        .toString();

    const renderItem = ({ item, index }) => {
        return (
            <CheckoutItems
                title={item.title}
                brand={item.brand}
                price={item.price}
                onPress={() => dispatch(removeItem(index))}
            />
        );
    };

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: convertHeight(120) }} />}
            />
            {items.length > 0 && (
                <ViewCartButton
                    checkout
                    text="Proceed to checkout"
                    price={"Total:" + totalUSD + "$"}
                    onPress={() => props.navigation.navigate("CheckoutScreen")}
                />
            )}
        </View>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});

const mockItems = [
    {
        id: "1",
        title: "Nike Air Max 90",
        brand: "Nike",
        price: 70,
    },
    {
        id: "2",
        title: "Nike Air Max 92",
        brand: "Nike",
        price: 60,
    },
    {
        id: "3",
        title: "Adidas Air Max 90",
        brand: "Adidas",
        price: 55,
    },
    {
        id: "4",
        title: "Puma Air Max 90",
        brand: "Puma",
        price: 50,
    },
    {
        id: "5",
        title: "Nike Air Max 93",
        brand: "Nike",
        price: 53,
    },
    {
        id: "6",
        title: "Nike Air Max 94",
        brand: "Nike",
        price: 24,
    },
];
