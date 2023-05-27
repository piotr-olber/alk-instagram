export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
