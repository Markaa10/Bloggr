import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {sizes} from '../../assets/theme';

interface IconContainerProps extends ViewProps {
  icon: ReactNode;
  itemId: number;
}

const IconContainer = ({
  itemId = 1,
  icon: Icon,
  ...props
}: Readonly<IconContainerProps>) => {
  const getBg = () => {
    if (itemId % 7 === 0) {
      return 'rgba(253, 203, 110, 0.20)';
    } else if (itemId % 6 === 0) {
      return 'rgba(225, 112, 85, 0.20)';
    } else if (itemId % 5 === 0) {
      return 'rgba(108, 92, 231, 0.20)';
    } else if (itemId % 4 === 0) {
      return 'rgba(0, 206, 201, 0.20)';
    } else if (itemId % 3 === 0) {
      return 'rgba(232, 67, 147, 0.20)';
    } else if (itemId % 2 === 0) {
      return 'rgba(9, 132, 227, 0.20)';
    } else {
      return 'rgba(0, 184, 148, 0.20)';
    }
  };

  const getUserColor = () => {
    if (itemId % 7 === 0) {
      return '#FDCB6E';
    } else if (itemId % 6 === 0) {
      return '#E17055';
    } else if (itemId % 5 === 0) {
      return '#6C5CE7';
    } else if (itemId % 4 === 0) {
      return '#00CEC9';
    } else if (itemId % 3 === 0) {
      return '#E84393';
    } else if (itemId % 2 === 0) {
      return '#0984E3';
    } else {
      return '#00B894';
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: getBg()}, props?.style]}>
      <Icon style={{color: getUserColor()}} />
    </View>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  container: {
    width: sizes.appWidth(3.75),
    height: sizes.appWidth(3.75),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.appWidth(1.3125),
  },
});
