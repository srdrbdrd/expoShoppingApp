import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { convertHeight, convertWidth } from "../helpers/responsiveUiHelper";

const ViewCartButton = (props) => {
    return (
        <TouchableOpacity
            style={props.checkout ? styles.containerCheckout : styles.container}
            onPress={props.onPress}
        >
            <Text
                style={{
                    fontSize: convertWidth(16),
                    fontWeight: "700",
                    justifyContent: "center",
                }}
            >
                {props.text}
            </Text>
            <Text
                style={{
                    fontSize: convertWidth(16),
                    fontWeight: "700",
                    marginLeft: convertWidth(10),
                }}
            >
                {props.price}
            </Text>
        </TouchableOpacity>
    );
};

export default ViewCartButton;

const styles = StyleSheet.create({
    container: {

        width: convertWidth(200),
        backgroundColor: "#d3d3d3",
        padding: convertWidth(10),
        borderRadius: convertWidth(10),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        position: 'absolute',
        bottom: convertHeight(36),
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    containerCheckout: {

        width: convertWidth(320),
        backgroundColor: "#d3d3d3",
        padding: convertWidth(10),
        borderRadius: convertWidth(10),
        justifyContent: "center",
        margin: convertWidth(20),
        alignItems: "center",
        flexDirection: 'column',
        position: 'absolute',
        bottom: convertHeight(20),
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }

});
