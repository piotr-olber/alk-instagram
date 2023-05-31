import { Image, Pressable } from "react-native";
import { usePhotoById } from "../hooks/usePhotoById";

import { Photo } from "../hooks/Types";

type ImageTileProps = {
    id: number;
    url: string;
    tileSize: number;
    openModal: (photo: Photo) => void;
};

export const ImageTile = ({ id, url, tileSize, openModal }: ImageTileProps) => {
    const photo = usePhotoById(id);

    const handleImagePress = () => {
        openModal(photo);
    };

    return (
        <>
            <Pressable onPress={handleImagePress}>
                <Image
                    source={{
                        uri: url,
                    }}
                    style={{ width: tileSize, height: tileSize }}
                />
            </Pressable>
        </>
    );
};
