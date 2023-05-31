import {
    View,
    Text,
    Modal,
    SafeAreaView,
    Pressable,
    Image,
    Dimensions,
    StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Photo } from "../hooks/Types";

type ImageModalScreenProps = {
    isOpen: boolean;
    photo: Photo | undefined;
    closeModal: () => void;
};

export const ImageModalScreen = ({
    photo,
    isOpen,
    closeModal,
}: ImageModalScreenProps) => {
    const windowWidth = Dimensions.get("window").width;

    return (
        <Modal visible={isOpen}>
            <SafeAreaView style={styles.container}>
                <View style={styles.closeContainer}>
                    <Pressable onPress={closeModal}>
                        <AntDesign
                            name="close"
                            size={26}
                            color="black"
                            style={styles.closeButton}
                        />
                    </Pressable>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: photo?.url,
                        }}
                        style={{ width: windowWidth, height: windowWidth }}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        height: Dimensions.get("window").height,
    },
    closeContainer: {
        alignItems: "flex-end",
        width: "100%",
        paddingRight: 15,
    },
    closeButton: {
        color: "white",
        // fontSize: 20,
        fontWeight: "bold",
    },
    imageContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
});
