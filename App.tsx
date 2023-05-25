import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";

import { useFonts } from "expo-font";

import BottomNavigator from "./src/navigators/BottomNavigator";
import { photoQueryClient } from "./src/hooks/PhotosQueryClient";

export default function App() {
    const [fontsLoaded] = useFonts({
        lobsterTwoItalic: require("./assets/fonts/LobsterTwo-Italic.ttf"),
    });

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <QueryClientProvider client={photoQueryClient}>
                <BottomNavigator />
            </QueryClientProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
