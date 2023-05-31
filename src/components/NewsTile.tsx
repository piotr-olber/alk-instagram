import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { NewsTileHeader } from "./NewsTileHeader";
import { NewsTileFooter } from "./NewsTileFooter";

type NewsTileProps = {
    id: number;
    title: string;
    url: string;
    tileSize: number;
};

export const NewsTile = ({ id, url, tileSize, title }: NewsTileProps) => {
    return (
        <View>
            <NewsTileHeader userName={title.substring(1, title.indexOf(" "))} />
            <Image
                source={{
                    uri: url,
                }}
                style={{ width: tileSize, height: tileSize }}
            />
            <NewsTileFooter tileText={title} id={id} />
        </View>
    );
};

// const styles = StyleSheet.create({
//   tileHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "black",
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
// });
