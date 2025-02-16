import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {Check, Trash} from '../../assets/icons';
import {sizes} from '../../assets/theme';
import {Todo} from '../hooks/useFetchUserTodos';
import Button from './Button';

interface TodoCardProps extends ViewProps {
  todo: Todo;
  isRemaining?: boolean;
  onDelete?(): void;
  onDone?(): void;
}
const TodoCard = ({
  todo,
  onDelete,
  onDone,
  isRemaining = false,
}: Readonly<TodoCardProps>) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          color: '#727272',
          fontSize: sizes.appWidth(0.875),
          maxWidth: sizes.appWidth(8.75),
          fontWeight: '700',
          textDecorationLine: !isRemaining ? 'line-through' : 'none',
          textDecorationColor: '#727272',
        }}>
        {todo.title}
      </Text>

      <View style={{gap: sizes.appWidth(0.75), flexDirection: 'row'}}>
        {isRemaining && (
          <Button
            onPress={onDone}
            prefixIcon={<Check color="#00B894" />}
            style={{
              backgroundColor: 'rgba(0, 184, 148, 0.20)',
              width: sizes.appWidth(2.5),
              borderRadius: sizes.appWidth(0.9375),
              height: sizes.appWidth(2.5),
            }}
          />
        )}
        <Button
          onPress={onDelete}
          prefixIcon={<Trash color="#D63031" />}
          style={{
            backgroundColor: 'rgba(214, 48, 49, 0.20)',
            width: sizes.appWidth(2.5),
            height: sizes.appWidth(2.5),
            borderRadius: sizes.appWidth(0.9375),
          }}
        />
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
