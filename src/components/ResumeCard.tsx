import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, sizes} from '../../assets/theme';

type ResumeCardProps = {title?: string; subTitle?: string; icon: ReactNode};
const ResumeCard = ({subTitle, title, icon}: Readonly<ResumeCardProps>) => {
  return (
    <View style={styles.container}>
      {icon}
      {title ? (
        <View style={{flexDirection: 'column', gap: sizes.appHeight(0.38)}}>
          <Text
            style={{
              color: '#333',
              fontSize: sizes.appWidth(1),
              fontWeight: '600',
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: colors.grey['400'],
              fontSize: sizes.appWidth(0.875),
              fontWeight: '600',
            }}>
            {subTitle}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default ResumeCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.appWidth(0.75),
  },
});
