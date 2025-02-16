import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {colors, sizes} from '../../../../assets/theme';
import {TodoCard} from '../../../components';
import {useFetchUserTodos} from '../../../hooks';

const PendingTodosScreen = () => {
  const {
    remainingTodos,
    remainingProps: {isLoading, refetch},
    removeTodo,
    updateCompletedTodo,
  } = useFetchUserTodos();

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={isLoading}
        onRefresh={refetch}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: sizes.appHeight(1.87),
          marginTop: sizes.appHeight(2),
          paddingBottom: sizes.appHeight(5),
        }}
        data={remainingTodos}
        renderItem={({item}) => (
          <TodoCard
            onDelete={() => removeTodo(item.id)}
            onDone={async () => await updateCompletedTodo(item)}
            isRemaining
            todo={item}
            key={item.id}
          />
        )}
        keyExtractor={(item, _) => item.id.toFixed()}
      />
    </View>
  );
};

export default PendingTodosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
  },
});
