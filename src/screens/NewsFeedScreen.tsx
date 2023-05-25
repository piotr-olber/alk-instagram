import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NewsHeader } from "../components/NewsHeader";

const NewsFeedScreen = () => {
    return (
        <SafeAreaView>
            <NewsHeader />
            <Text>NewsFeedScreen</Text>
        </SafeAreaView>
    );
};

export default NewsFeedScreen;
