import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PendingTodosScreen} from '../screens';

export const TodosStackNavigation = createNativeStackNavigator({
  screens: {
    'Pending Todos': {
      screen: PendingTodosScreen,
      initialParams: {userId: undefined},
    },
  },
  screenOptions: {headerShown: false},
});
