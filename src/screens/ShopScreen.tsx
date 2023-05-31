import { Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";

const ShopScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Shop</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        height: Dimensions.get("window").height - 90,
    },
    text: {
        color: "white",
        fontSize: 32,
    },
});

export default ShopScreen;
