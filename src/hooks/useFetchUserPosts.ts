import {useQuery} from '@tanstack/react-query';

export const useFetchUserPosts = (userId: number) => {
  const userPosts = useQuery({
    queryKey: ['FETCH_USER_POSTS'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching user posts.');
      }
    },
  });

  return userPosts;
};
