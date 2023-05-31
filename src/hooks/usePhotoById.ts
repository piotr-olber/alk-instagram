import { useQuery } from "@tanstack/react-query";

import { Photo, PHOTOS_URL } from "./Types";

const getPhotoById = async (id: number): Promise<Photo> => {
    const response = await fetch(`${PHOTOS_URL}/${id}`);
    return response.json();
};

export const usePhotoById = (id: number): Photo => {
    const fallback: Photo = {
        albumId: 0,
        id: 0,
        title: "",
        url: "",
        thumbnailUrl: "",
    };

    const { data = fallback } = useQuery<Photo, Error>(["photos", id], () =>
        getPhotoById(id)
    );
    return data;
};
