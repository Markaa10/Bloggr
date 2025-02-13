import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostDetailsScreen, UserPostsScreen} from '../screens';

export const PostsStackNavigation = createNativeStackNavigator({
  screens: {
    UserPosts: {
      screen: UserPostsScreen,
      initialParams: {userId: undefined},
    },
    PostDetails: {
      screen: PostDetailsScreen,
      initialParams: {postId: undefined},
    },
  },
  screenOptions: {headerShown: false},
});
