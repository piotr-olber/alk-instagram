import { StyleSheet, Text, View } from "react-native";

export const NewsHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Instagram</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "lobsterTwoItalic",
        fontWeight: "100",
        fontSize: 32,
        color: "white"
    },
    headerContainer: {
        paddingTop: 10,
        paddingLeft: 8,
        paddingBottom: 10,
        backgroundColor: "black",
       
    },
});
