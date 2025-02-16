import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AlbumsStackNavigation, PostsStackNavigation} from '.';
import {Album, CheckSquare, Document} from '../../assets/icons';
import {TodosScreen} from '../screens';

export const BottomTabs = createBottomTabNavigator({
  screens: {
    'All Posts': {
      screen: PostsStackNavigation,
      options: {
        tabBarIcon: ({focused}) => (
          <Document color={focused ? '#333' : '#AAAAAA'} />
        ),
      },
    },
    'All Albums': {
      screen: AlbumsStackNavigation,
      options: {
        tabBarIcon: ({focused}) => (
          <Album color={focused ? '#333' : '#AAAAAA'} />
        ),
      },
    },
    Todos: {
      screen: TodosScreen,
      options: {
        tabBarIcon: ({focused}) => (
          <CheckSquare color={focused ? '#333' : '#AAAAAA'} />
        ),
      },
    },
  },
  screenOptions: {headerShown: false, tabBarShowLabel: false},
});
