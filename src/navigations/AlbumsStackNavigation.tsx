import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlbumsScreen} from '../screens';
import PhotosScreen from '../screens/BottomTabScreens/albums/PhotosScreen';

export const AlbumsStackNavigation = createNativeStackNavigator({
  screens: {
    'User Albums': {
      screen: AlbumsScreen,
      initialParams: {userId: undefined},
    },
    'Album Photos': {
      screen: PhotosScreen,
      initialParams: {albumId: undefined},
    },
  },
  screenOptions: {headerShown: false},
});
