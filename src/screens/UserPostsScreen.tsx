import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Document} from '../../assets/icons';
import {colors, sizes} from '../../assets/theme';
import {IconContainer, Navbar} from '../components';
import {useFetchUserPosts} from '../hooks';

const UserPostsScreen = ({route}: {route: {params: {userId: number}}}) => {
  const {data, isLoading, refetch} = useFetchUserPosts(route.params.userId);

  const renderItem = item => {
    return (
      <View
        style={{
          gap: sizes.appWidth(1.13),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconContainer icon={Document} itemId={item.id} />
        <Text
          style={{
            fontSize: sizes.appWidth(1.125),
            fontWeight: '500',
            lineHeight: sizes.appHeight(1.5),
            color: '#333',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar lightText="All" text="Posts" />

      <FlatList
        data={data}
        contentContainerStyle={{
          gap: sizes.appHeight(2),
          marginTop: sizes.appHeight(1.63),
          paddingBottom: sizes.appHeight(2),
        }}
        refreshing={isLoading}
        onRefresh={refetch}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
  },
});
