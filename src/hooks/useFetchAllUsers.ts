import {useQuery} from '@tanstack/react-query';

export const useFetchAllUsers = () => {
  const users = useQuery({
    queryKey: ['FETCH_ALL_USERS'],
    queryFn: async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching users.');
      }
    },
  });

  return users;
};
