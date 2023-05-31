import React from "react";
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { NewsHeader } from "../components/NewsHeader";
import { NewsTile } from "../components/NewsTile";
import { usePhotos } from "../hooks/usePhotos";

const NewsFeedScreen = () => {
    const photos = usePhotos();
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
