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
    const getBg = () => {
      if (item.id % 7 === 0) {
        return 'rgba(253, 203, 110, 0.20)';
      } else if (item.id % 6 === 0) {
        return 'rgba(225, 112, 85, 0.20)';
      } else if (item.id % 5 === 0) {
        return 'rgba(108, 92, 231, 0.20)';
      } else if (item.id % 4 === 0) {
        return 'rgba(0, 206, 201, 0.20)';
      } else if (item.id % 3 === 0) {
        return 'rgba(232, 67, 147, 0.20)';
      } else if (item.id % 2 === 0) {
        return 'rgba(9, 132, 227, 0.20)';
      } else {
        return 'rgba(0, 184, 148, 0.20)';
      }
    };

    const getUserColor = () => {
      if (item.id % 7 === 0) {
        return '#FDCB6E';
      } else if (item.id % 6 === 0) {
        return '#E17055';
      } else if (item.id % 5 === 0) {
        return '#6C5CE7';
      } else if (item.id % 4 === 0) {
        return '#00CEC9';
      } else if (item.id % 3 === 0) {
        return '#E84393';
      } else if (item.id % 2 === 0) {
        return '#0984E3';
      } else {
        return '#00B894';
      }
    };

    return (
      <Pressable
        onPress={() => {
          navigation.navigate('AllPosts', {userId: item.id});
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
