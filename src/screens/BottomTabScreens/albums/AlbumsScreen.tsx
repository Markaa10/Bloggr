import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts, sizes} from '../../../../assets/theme';
import {Navbar} from '../../../components';
import {useFetchUserAlbums} from '../../../hooks';

const AlbumsScreen = () => {
  const {data, isLoading} = useFetchUserAlbums();

  const navigation = useNavigation();

  const renderItem = item => {
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

    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Album Photos', {
            albumId: item.id,
            title: item.title,
          })
        }
        style={{
          flexDirection: 'column',
          maxWidth: sizes.appWidth(9.6875),
          gap: sizes.appHeight(0.5),
        }}>
        <View
          style={{
            width: sizes.appWidth(9.6875),
            height: sizes.appHeight(12.6875),
            borderRadius: sizes.appWidth(1.3125),
            backgroundColor: getBg(),
          }}
        />
        <Text
          numberOfLines={3}
          style={{
            color: '#727272',
            fontSize: sizes.appWidth(0.875),
            fontWeight: '700',
            ...fonts.family,
          }}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar lightText="All" text="Albums" />

      <FlatList
        refreshing={isLoading}
        showsVerticalScrollIndicator={false}
        data={data}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          marginTop: sizes.appHeight(2),
        }}
        ItemSeparatorComponent={() => (
          <View style={{height: sizes.appHeight(1.06)}} />
        )}
        numColumns={2}
        renderItem={({item}) => renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default AlbumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
  },
});
