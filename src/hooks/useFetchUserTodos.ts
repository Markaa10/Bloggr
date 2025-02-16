import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation, useQueries} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export const useFetchUserTodos = () => {
  const [userId, setUserId] = useState();

  const getUserId = async () => {
    const id = await AsyncStorage.getItem('userId');
    setUserId(JSON.parse(id as string));
  };

  useEffect(() => {
    getUserId();
  }, []);

  const [
    {data, ...rest},
    {data: completedTodos, refetch: refetchCompleted, ...restCompleted},
  ] = useQueries({
    queries: [
      {
        queryKey: ['FETCH_USER_REMAINING_TODOS', userId],
        queryFn: async () => {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}/todos?completed=false`,
            );

            return response.json();
          } catch (error) {
            throw new Error('Error fetching user remaining todos.');
          }
        },
        enabled: !!userId,
      },
      {
        queryKey: ['FETCH_USER_COMPLETED_TODOS', userId],
        queryFn: async () => {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}/todos?completed=true`,
            );

            return response.json();
          } catch (error) {
            throw new Error('Error fetching user completed todos.');
          }
        },
        enabled: !!userId,
      },
    ],
  });

  const addTodo = async (todo: Partial<Todo>) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          method: 'POST',
          body: JSON.stringify({...todo, userId}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      const addedTodo: Todo = {
        ...(await response.json()),
        id: Math.random() * 1024,
      };
      data.unshift(addedTodo);
    } catch (error) {
      throw new Error('Error adding todo.');
    }
  };

  const completeTodo = async (item: Todo) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${item.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({completed: !item.completed}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );

      const completedTodo = await response.json();
      completedTodos.unshift(completedTodo);
      data.splice(
        data.findIndex((todo: Todo) => todo.id === completedTodo.id),
        1,
      );
    } catch (error) {
      throw new Error('Error completing todo.');
    }
  };

  const removeTodo = (todoId: number) => {
    const isRemain = data.findIndex((todo: Todo) => todo.id === todoId);

    isRemain
      ? data.splice(isRemain, 1)
      : completedTodos.splice(
          completedTodos.findIndex((todo: Todo) => todo.id === todoId),
          1,
        );
  };

  const {mutateAsync: updateCompletedTodo} = useMutation({
    mutationKey: ['COMPLETE_TODO'],
    mutationFn: completeTodo,
  });
  const {mutateAsync: addTodoMutate} = useMutation({
    mutationKey: ['ADD_TODO'],
    mutationFn: addTodo,
  });

  const clearAllTodos = () => {
    completedTodos.splice(0, completedTodos.length);
  };

  return {
    data,
    remainingTodos: data,
    completedTodos,
    clearAllTodos,
    refetchCompleted,
    updateCompletedTodo,
    addTodo: addTodoMutate,
    removeTodo,
    remainingProps: rest,
    completedProps: restCompleted,
  };
};
