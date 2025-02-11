import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Home} from '../../assets/icons';
import {colors, sizes} from '../../assets/theme';

type NavbarProps = {lightText: string; text: string};

const Navbar = ({lightText, text}: Readonly<NavbarProps>) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.lightText}>{lightText} </Text>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Home onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightText: {
    color: colors.textSecondary,
    fontWeight: '300',
    fontSize: sizes.appWidth(2),
  },
  text: {
    color: colors.textSecondary,
    fontWeight: '700',
    fontSize: sizes.appWidth(2),
  },
});
