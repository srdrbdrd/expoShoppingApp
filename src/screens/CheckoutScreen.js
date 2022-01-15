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
                    onPress={() => props.navigation.navigate("SingInScreen")}
                />
            )}
        </View>
    );
};

export default CheckoutScreen;

