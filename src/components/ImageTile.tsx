import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
    url: string;
    tileSize: number;
};

export const ImageTile = ({ url, tileSize }: Props) => {
    return (
        <Image
            source={{
                uri: url,
            }}
            style={{ width: tileSize, height: tileSize }}
        />
    );
};
