import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {colors, fonts, sizes} from '../../assets/theme';
import {PendingTodosScreen} from '../screens';
import completedTodosScreen from '../screens/BottomTabScreens/todos/CompletedTodosScreen';

const TodosTab = createMaterialTopTabNavigator();

export default function TodosTabNavigation() {
  return (
    <TodosTab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          backgroundColor: colors.white,
          marginTop: sizes.appHeight(2.5),
        },
        tabBarLabelStyle: {
          color: colors.blue[500],
          fontWeight: '700',
          ...fonts.family,
          fontSize: sizes.appWidth(0.875),
          lineHeight: sizes.appWidth(1.25),
          textAlign: 'center',
          textTransform: 'capitalize',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'rgba(9, 132, 227, 0.2)',
          height: 60,
          borderRadius: 21,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIndicatorContainerStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <TodosTab.Screen
        name="Pending Todos"
        options={{tabBarLabel: 'Pending'}}
        component={PendingTodosScreen}
      />
      <TodosTab.Screen
        name="Completed Todos"
        options={{tabBarLabel: 'Completed'}}
        component={completedTodosScreen}
      />
    </TodosTab.Navigator>
  );
}
