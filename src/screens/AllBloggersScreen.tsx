import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {User} from '../../assets/icons';
import {colors, sizes} from '../../assets/theme';
import {IconContainer, Navbar} from '../components';
import {useFetchAllUsers} from '../hooks';

const AllBloggersScreen = () => {
  const {data, isLoading, refetch} = useFetchAllUsers();

  const navigation = useNavigation();

  const renderItem = (item: any) => {
    return (
      <Pressable
        onPress={async () => {
          navigation.navigate('BottomTabs', {
            screen: 'All Posts',
            params: {
              screen: 'UserPosts',
              params: {userId: item.id},
            },
          });

          await AsyncStorage.setItem('userId', JSON.stringify(item.id));
        }}
        style={styles.user}>
        <IconContainer icon={User} itemId={item.id} />

        <View style={{gap: sizes.appHeight(0.25)}}>
          <Text>{item.name}</Text>
          <Text>{item.company.name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar lightText="All" text="Bloggrs" />
      <FlatList
        refreshing={isLoading}
        onRefresh={refetch}
        contentContainerStyle={{
          gap: sizes.appHeight(1.5),
          marginTop: sizes.appHeight(2),
          paddingBottom: sizes.appHeight(2),
        }}
        data={data}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AllBloggersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
  },
  iconContainer: {
    width: sizes.appWidth(3.75),
    height: sizes.appWidth(3.75),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.appWidth(1.3125),
  },
  user: {
    gap: sizes.appWidth(0.75),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
