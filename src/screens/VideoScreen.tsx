import {
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
} from "react-native";

const VideoScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Video</Text>
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

export default VideoScreen;
