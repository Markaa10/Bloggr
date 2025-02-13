import {useQuery} from '@tanstack/react-query';

export const useFetchAlbumPhotos = (albumId: number) => {
  return useQuery({
    queryKey: ['FETCH_ALBUM_PHOTOS', albumId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching album photos.');
      }
    },
    enabled: !!albumId,
  });
};
