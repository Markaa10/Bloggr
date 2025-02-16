import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {Home} from '../../assets/icons';
import {colors, sizes} from '../../assets/theme';

interface NavbarProps extends ViewProps {
  lightText: string;
  text: string;
  onPress?(): void;
}

const Navbar = ({
  lightText,
  onPress,
  text,
  ...props
}: Readonly<NavbarProps>) => {
  const navigation = useNavigation();
  const onHomeNavigation = () =>
    navigation.navigate('Welcome', {screen: 'Home'});

  return (
    <View style={[styles.container, props?.style]}>
      <View style={styles.textContainer}>
        <Text style={styles.lightText}>{lightText} </Text>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Home onPress={onHomeNavigation} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
