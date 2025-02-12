import {useQuery} from '@tanstack/react-query';

export const useFetchPostDetails = (postId: number) => {
  const {data, isFetched, isLoading} = useQuery({
    queryKey: ['FETCH_POST_DETAILS'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching user posts.');
      }
    },
  });

  const {data: userData, isLoading: userLoading} = useQuery({
    queryKey: ['FETCH_POST_USER_DETAILS'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${data?.userId}`,
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching post user details.');
      }
    },
    enabled: isFetched,
  });

  const postComments = useQuery({
    queryKey: ['FETCH_POST_COMMENTS'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        );

        return response.json();
      } catch (error) {
        throw new Error('Error fetching post comments.');
      }
    },
    enabled: isFetched,
  });

  return {
    data: {
      title: data?.title,
      user: userData?.name,
      body: data?.body,
      comments: postComments,
    },
    isLoading: userLoading || isLoading,
  };
};
