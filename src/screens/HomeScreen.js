import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ViewCartButton from "../components/ViewCartButton";
import ShoopingCards from "../components/ShoopingCards";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/actions";
import { convertHeight, convertWidth } from "../helpers/responsiveUiHelper";
const HomeScreen = (props) => {
    const { items } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const totalUSD = items
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0)
        .toString();

    const renderItem = ({ item, index }) => {
        return (
            <ShoopingCards
                title={item.title}
                brand={item.brand}
                price={item.price + '$'}
                onPress={() => dispatch(addItem(item))}
            />
        );
    };

    const endComponent = () => <View style={{ height: convertHeight(80) }} />;

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
            <FlatList
                data={mockItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={endComponent}
            />
            {items.length > 0 && (
                <ViewCartButton
                    text="View Cart"
                    price={totalUSD + "$"}
                    onPress={() => props.navigation.navigate("CheckoutScreen")}
                />
            )}
        </View>
    );
};

export default HomeScreen;

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
