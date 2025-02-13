import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

export const useFetchUserAlbums = () => {
  const [userId, setUserId] = useState();

  const getUserId = async () => {
    const id = await AsyncStorage.getItem('userId');
    setUserId(JSON.parse(id as string));
  };

  useEffect(() => {
    getUserId();
  }, []);

  return useQuery({
    queryKey: ['FETCH_USER_ALBUMS', userId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching user albums.');
      }
    },
  });
};
