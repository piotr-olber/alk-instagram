import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Dimensions } from "react-native";
import { SearchBar } from "@rneui/themed";
import { SafeAreaView } from "react-native";

import { ImageTile } from "../components/ImageTile";
import { usePhotos } from "../hooks/usePhotos";

const SearchScreen = () => {
    const photos = usePhotos();

    const windowWidth = Dimensions.get("window").width;
    const tileSize = windowWidth / 3;

    return (
        <SafeAreaView>
            <SearchBar
                placeholder="Search ..."
                round
                searchIcon={{ size: 28 }}
            />
            <FlatList
                data={photos}
                numColumns={3}
                renderItem={({ item }) => (
                    <ImageTile url={item.thumbnailUrl} tileSize={tileSize} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
};

export default SearchScreen;
