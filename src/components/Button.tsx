import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors, fonts, sizes} from '../../assets/theme';

type Variant = 'outlined' | 'filled' | 'text';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: Variant;
  prefixIcon?: ReactNode;
}

const Button = ({
  text,
  variant = 'filled',
  prefixIcon,
  ...props
}: Readonly<ButtonProps>) => {
  const variantStyle =
    variant === 'filled'
      ? styles.filled
      : variant === 'outlined'
      ? styles.outlined
      : styles.text;

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        variantStyle,
        prefixIcon ? styles.prefixIcon : null,
        props?.style,
      ]}>
      {prefixIcon}
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  prefixIcon: {flexDirection: 'row'},
  filled: {
    borderRadius: sizes.appWidth(1.3125),
    padding: sizes.appHeight(1.25),
    backgroundColor: colors.blue[200],
  },
  outlined: {},
  text: {},
  textStyle: {
    ...fonts.family,
    fontSize: sizes.appWidth(0.875),
    fontWeight: '600',
    lineHeight: sizes.appWidth(1.25),
    color: colors.blue[500],
  },
});
