import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AllBloggersScreen,
  HomeScreen,
  MyResumeScreen,
  PostDetailsScreen,
  UserPostsScreen,
} from '../screens';

export const HomeNavigation = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Resume: MyResumeScreen,
    AllBloggrs: AllBloggersScreen,
    AllPosts: {
      screen: UserPostsScreen,
      initialParams: {userId: 1},
    },
    PostDetails: {
      screen: PostDetailsScreen,
      initialParams: {postId: 1},
    },
  },
  screenOptions: {headerShown: false},
});
