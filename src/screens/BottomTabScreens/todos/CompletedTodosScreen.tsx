import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EmptyTodoIllustration} from '../../../../assets/illustrations';
import {colors, fonts, sizes} from '../../../../assets/theme';
import {TodoCard} from '../../../components';
import {useFetchUserTodos} from '../../../hooks';

const CompletedTodosScreen = () => {
  const {
    completedTodos,
    completedProps: {isLoading},
    removeTodo,
    refetchCompleted,
    clearAllTodos,
  } = useFetchUserTodos();

  return (
    <View style={styles.container}>
      {completedTodos?.length > 0 && (
        <TouchableOpacity style={styles.clearAll} onPress={clearAllTodos}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      )}
      <FlatList
        refreshing={isLoading}
        onRefresh={refetchCompleted}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: sizes.appHeight(1.87),
          paddingBottom: sizes.appHeight(5),
        }}
        ListEmptyComponent={<EmptyCompleted />}
        data={completedTodos}
        renderItem={({item}) => (
          <TodoCard todo={item} onDelete={() => removeTodo(item.id)} />
        )}
      />
    </View>
  );
};

export default CompletedTodosScreen;

const EmptyCompleted = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: sizes.appHeight(0.79),
        marginTop: sizes.appHeight(7),
      }}>
      <EmptyTodoIllustration />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: sizes.appHeight(0.38),
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: sizes.appWidth(1.5),
            fontWeight: '800',
            ...fonts.family,
          }}>
          Nothing to See Here
        </Text>
        <Text
          style={{
            color: '#727272',
            fontSize: sizes.appWidth(0.875),
            fontWeight: '700',
            textAlign: 'center',
            maxWidth: sizes.appWidth(13.1875),
            ...fonts.family,
          }}>
          The tasks that you've completed will appear here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
  },
  clearAll: {
    marginTop: sizes.appHeight(1.38),
    marginBottom: sizes.appHeight(1.25),
  },

  clearAllText: {
    alignSelf: 'flex-end',
    color: '#D63031',
    fontSize: sizes.appWidth(0.875),
    fontWeight: '700',
  },
});
