import { useQuery } from "@tanstack/react-query";
import { Photo, PHOTOS_URL } from "./Types";

const getPhotos = async (): Promise<Photo[]> => {
  const response = await fetch(PHOTOS_URL);
  return response.json();
};

export const usePhotos = (): Photo[] => {
  const fallback: Photo[] = [];
  const { data = fallback } = useQuery<Photo[], Error>(["photos"], getPhotos);
  return data;
};
