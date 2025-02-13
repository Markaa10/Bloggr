import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {ArrowLeft} from '../../assets/icons';
import {sizes} from '../../assets/theme';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <ArrowLeft color="#0984E3" style={{fontSize: sizes.appWidth(1.125)}} />
      <Text style={styles.text}>Go Back</Text>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: sizes.appWidth(0.62),
    marginTop: sizes.appHeight(2.5),
    alignItems: 'center',
  },
  text: {
    color: '#0984E3',
    fontSize: sizes.appWidth(1.125),
    fontWeight: '600',
  },
});
