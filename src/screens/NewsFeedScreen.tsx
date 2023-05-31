import React from "react";
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { useIsFetching } from "@tanstack/react-query";
import { NewsHeader } from "../components/NewsHeader";
import { NewsTile } from "../components/NewsTile";
import { usePhotos } from "../hooks/usePhotos";
import { useSpinner } from "../SpinnerProvider/useSpinner";

const NewsFeedScreen = () => {
    const photos = usePhotos();
    const isLoading = useIsFetching();
    const setSpinner = useSpinner();

    setSpinner(Boolean(isLoading));

    const windowWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView>
            <NewsHeader />
            <FlatList
                data={photos}
                numColumns={1}
                renderItem={({ item }) => (
                    <NewsTile
                        id={item.id}
                        title={item.title}
                        url={item.thumbnailUrl}
                        tileSize={windowWidth}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

export default NewsFeedScreen;
