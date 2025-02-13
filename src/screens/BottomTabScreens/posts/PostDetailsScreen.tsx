import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {User} from '../../../../assets/icons';
import {colors, fonts, sizes} from '../../../../assets/theme';
import {BackButton, IconContainer} from '../../../components';
import {useFetchPostDetails} from '../../../hooks';

const PostDetailsScreen = ({route}: {route: {params: {postId: number}}}) => {
  const navigation = useNavigation();

  const {data, isLoading} = useFetchPostDetails(route.params.postId);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: sizes.appWidth(1.5),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text
          style={{
            fontSize: sizes.appWidth(1.5),
            fontWeight: '700',
            lineHeight: sizes.appHeight(2),
            color: '#333',
            marginTop: sizes.appHeight(1),
            ...fonts.family,
            marginBottom: sizes.appHeight(2),
          }}>
          {data.title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: sizes.appWidth(0.5),
            alignItems: 'center',
            marginBottom: sizes.appHeight(2),
          }}>
          <IconContainer
            style={{width: sizes.appWidth(2), height: sizes.appWidth(2)}}
            icon={User}
            size={16}
            itemId={route.params.postId}
          />
          <Text
            style={{
              fontSize: sizes.appWidth(0.875),
              fontWeight: '700',
              color: '#AAAAAA',
            }}>
            by{' '}
            <Text
              style={{
                fontSize: sizes.appWidth(0.875),
                fontWeight: '700',
                color: '#727272',
              }}>
              {data.user}
            </Text>
          </Text>
        </View>

        <Text
          style={{
            fontSize: sizes.appWidth(1),
            fontWeight: '600',
            lineHeight: sizes.appHeight(1.5),
            color: '#333',
            marginBottom: sizes.appHeight(2.31),
            ...fonts.family,
          }}>
          {data.body}
        </Text>

        <Text
          style={{
            color: '#333',
            fontWeight: '700',
            fontSize: sizes.appWidth(1),
            lineHeight: sizes.appHeight(1.5),
            ...fonts.family,
            marginBottom: sizes.appHeight(0.75),
          }}>
          All Comments
        </Text>

        {data?.comments.data?.length > 0 ? (
          <View style={{flexDirection: 'column', gap: sizes.appHeight(1.5)}}>
            {data.comments.data?.map(comment => (
              <View
                key={comment.id}
                style={{flexDirection: 'row', gap: sizes.appWidth(0.25)}}>
                <IconContainer
                  style={{
                    width: sizes.appWidth(2.5),
                    height: sizes.appWidth(2.5),
                    borderRadius: sizes.appWidth(0.875),
                  }}
                  icon={User}
                  size={16}
                  itemId={comment.id}
                />
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      fontSize: sizes.appWidth(0.875),
                      fontWeight: '700',
                      ...fonts.family,
                      color: '#727272',
                    }}>
                    {comment.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: sizes.appWidth(0.75),
                      fontWeight: '700',
                      ...fonts.family,
                      marginBottom: sizes.appHeight(0.5),
                      color: '#aaaaaa',
                    }}>
                    {comment.email}
                  </Text>
                  <Text
                    style={{
                      fontSize: sizes.appWidth(0.875),
                      lineHeight: sizes.appHeight(1.25),
                      fontWeight: '700',
                      ...fonts.family,
                      color: '#333333',
                    }}>
                    {comment.body}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text>No Comments</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({});
