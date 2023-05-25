import { useQuery } from "@tanstack/react-query";

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const getPhotos = async (): Promise<Photo[]> => {
    const response = await fetch(PHOTOS_URL);
    return response.json();
};

export const usePhotos = (): Photo[] => {
    const fallback: Photo[] = [];
    const { data = fallback } = useQuery<Photo[], Error>(["photos"], getPhotos);
    return data;
};
