import React, { useState } from "react";
import { ImageModalScreen } from "../screens/ImageModalSereen";
import { StyleSheet, FlatList } from "react-native";
import { Dimensions } from "react-native";
import { SearchBar } from "@rneui/themed";
import { SafeAreaView } from "react-native";
import { useIsFetching } from "@tanstack/react-query";

import { useSpinner } from "../SpinnerProvider/useSpinner";
import { ImageTile } from "../components/ImageTile";
import { usePhotos } from "../hooks/usePhotos";
import { Photo } from "../hooks/Types";

const SearchScreen = () => {
    const isLoading = useIsFetching();
    const setSpinner = useSpinner();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentPhoto, setCurrentPhoto] = useState<Photo>();
    const photos = usePhotos();

    setSpinner(Boolean(isLoading));

    const windowWidth = Dimensions.get("window").width;
    const tileSize = windowWidth / 3;

    const openModal = (photo: Photo) => {
        console.log("Click przez propsy");
        setIsModalOpen(true);
        setCurrentPhoto(photo);
        console.log(photo);
    };

    const closeModal = () => {
        console.log("Click close przez propsy");
        setIsModalOpen(false);
    };

    return (
        <>
            <SafeAreaView>
                <SearchBar
                    placeholder="Search ..."
                    round
                    searchIcon={styles.searchIcon}
                    containerStyle={styles.searchContainer}
                    placeholderTextColor="white"
                />
                <FlatList
                    data={photos}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <ImageTile
                            id={item.id}
                            url={item.thumbnailUrl}
                            tileSize={tileSize}
                            openModal={openModal}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
            <ImageModalScreen
                isOpen={isModalOpen}
                closeModal={closeModal}
                photo={currentPhoto}
            />
        </>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: "black",
    },
    searchIcon: { size: 28, color: "white" },
});

export default SearchScreen;
