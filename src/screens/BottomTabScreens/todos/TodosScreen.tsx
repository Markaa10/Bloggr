import React, {useState} from 'react';
import {Modal, StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Check, Plus} from '../../../../assets/icons';
import {colors, sizes} from '../../../../assets/theme';
import {Button, Navbar} from '../../../components';
import {useFetchUserTodos} from '../../../hooks/useFetchUserTodos';
import {TodosTabNavigation} from '../../../navigations';

const TodosScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {addTodo} = useFetchUserTodos();

  const createTodo = async () => {
    await addTodo({
      title: todo,
      completed: false,
    });
    setIsOpen(false);
  };

  const [todo, setTodo] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Navbar
        lightText="Your"
        text="Todo List"
        style={{
          paddingHorizontal: sizes.appWidth(1.5),
        }}
      />
      <TodosTabNavigation />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={{
          maxHeight: sizes.appHeight(18),
        }}>
        <View
          style={{
            width: sizes.appWidth(20.4375),
            maxHeight: sizes.appHeight(18.8125),
            backgroundColor: colors.white,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: {height: 15},
            elevation: 20,
            shadowRadius: 50,
            position: 'absolute',
            top: sizes.appHeight(15.06),
            left: sizes.appWidth(1.5),
            borderRadius: sizes.appWidth(2.3125),
            paddingHorizontal: sizes.appWidth(2.5),
            paddingVertical: sizes.appWidth(2.25),
          }}>
          <TextInput
            onChangeText={text => setTodo(text)}
            style={{
              borderWidth: 1,
              borderRadius: sizes.appWidth(1.4375),
              backgroundColor: colors.white,
              borderColor: 'rgba(64, 64, 64, 0.2)',
              padding: sizes.appWidth(1.25),
              height: sizes.appHeight(8.1875),
              textAlignVertical: 'top',
            }}
            multiline
            numberOfLines={5}
            placeholder="What do you want to do?"
          />
        </View>
        <Button
          prefixIcon={
            <Check
              color={colors.white}
              width={sizes.appWidth(1.5)}
              height={sizes.appHeight(2)}
            />
          }
          onPress={createTodo}
          style={{
            backgroundColor: colors.blue[500],
            width: sizes.appWidth(4.5),
            height: sizes.appWidth(4.5),
            position: 'absolute',
            bottom: sizes.appHeight(4.5),
            right: sizes.appWidth(1.5),
            borderRadius: sizes.appWidth(1.75),
            elevation: 20,
            shadowColor: 'rgba(9, 132, 227, 0.50)',
            shadowOffset: {
              height: sizes.appHeight(0.9375),
            },
            shadowRadius: sizes.appWidth(3.125),
          }}
        />
      </Modal>
      <Button
        prefixIcon={
          isOpen ? (
            <Check
              color={colors.white}
              width={sizes.appWidth(1.5)}
              height={sizes.appHeight(2)}
            />
          ) : (
            <Plus color={colors.white} />
          )
        }
        onPress={() => setIsOpen(prev => !prev)}
        style={{
          backgroundColor: colors.blue[500],
          width: sizes.appWidth(4.5),
          height: sizes.appWidth(4.5),
          position: 'absolute',
          bottom: sizes.appHeight(1.5),
          right: sizes.appWidth(1.5),
          borderRadius: sizes.appWidth(1.75),
          elevation: 20,
          shadowColor: 'rgba(9, 132, 227, 0.50)',
          shadowOffset: {
            height: sizes.appHeight(0.9375),
          },
          shadowOpacity: sizes.appWidth(3.125),
          shadowRadius: sizes.appWidth(3.125),
        }}
      />
    </SafeAreaView>
  );
};

export default TodosScreen;

const styles = StyleSheet.create({});
