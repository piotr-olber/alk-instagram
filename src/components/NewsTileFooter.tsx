import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type NewsTileFooterProps = {
    id: number;
    tileText: string;
};

export const NewsTileFooter = ({ id, tileText }: NewsTileFooterProps) => {
    return (
        <View style={styles.tileFooter}>
            <View style={styles.tileFooterIconsContainer}>
                <View style={styles.tileFooterIcons}>
                    <Pressable
                        onPress={() =>
                            console.log(`Press hart on tile with id ${id}`)
                        }
                    >
                        <AntDesign
                            name="hearto"
                            size={20}
                            color="white"
                            style={styles.tileFooterIcon}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() =>
                            console.log(`Press chat on tile with id ${id}`)
                        }
                    >
                        <Ionicons
                            name="md-chatbubble-outline"
                            size={20}
                            color="white"
                            style={styles.tileFooterIcon}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() =>
                            console.log(`Press arrow on tile with id ${id}`)
                        }
                    >
                        <Entypo
                            name="direction"
                            size={20}
                            color="white"
                            style={styles.tileFooterIcon}
                        />
                    </Pressable>
                </View>
                <View style={styles.tileFooterIcons}>
                    <Pressable
                        onPress={() =>
                            console.log(`Press bookmark on tile with id ${id}`)
                        }
                    >
                        <Ionicons
                            name="bookmark-outline"
                            size={20}
                            color="white"
                            style={styles.tileFooterIcon}
                        />
                    </Pressable>
                </View>
            </View>
            <View style={styles.tileFooterTextLine}>
                <Text style={styles.tileFooterText}>{tileText}</Text>
                <Text style={styles.tileFooterText}>42 tys. wyswietlen</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tileFooter: {
        backgroundColor: "black",
        paddingBottom: 12,
    },
    tileFooterIconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        paddingTop: 20,
        paddingBottom: 20,
    },
    tileFooterIcon: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    tileFooterIcons: {
        flexDirection: "row",
    },
    tileFooterTextLine: {
        paddingLeft: 6,
    },
    tileFooterText: {
        color: "white",
        fontSize: 12,
    },
});
