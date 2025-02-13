import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts, sizes} from '../../../../assets/theme';
import {BackButton} from '../../../components';
import {useFetchAlbumPhotos} from '../../../hooks';

const PhotosScreen = ({route}: any) => {
  const {data, isLoading, refetch} = useFetchAlbumPhotos(route.params.albumId);

  const renderItem = item => {
    return (
      <View
        style={{
          maxWidth: sizes.appWidth(9.375),
          flexDirection: 'column',
          gap: sizes.appHeight(0.5),
        }}>
        <View
          style={{
            backgroundColor: '#C4C4C4',
            width: sizes.appWidth(9.375),
            height: sizes.appWidth(9.375),
            borderRadius: sizes.appWidth(1.25),
          }}
        />
        <Text
          style={{
            fontSize: sizes.appWidth(0.75),
            fontWeight: '700',
            color: '#727272',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: sizes.appWidth(1.5)}}>
      <BackButton />
      <Text
        style={{
          marginTop: sizes.appHeight(1),
          color: '#333',
          fontSize: sizes.appWidth(2),
          marginBottom: sizes.appHeight(2),
          fontWeight: '800',
          ...fonts.family,
        }}>
        {route.params.title}
      </Text>
      <FlatList
        data={data}
        refreshing={isLoading}
        renderItem={({item}) => renderItem(item)}
        onRefresh={refetch}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => (
          <View style={{height: sizes.appHeight(1.06)}} />
        )}
      />
    </SafeAreaView>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({});
