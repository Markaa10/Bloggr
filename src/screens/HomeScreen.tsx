import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Profile} from '../../assets/icons';
import {HomeIllustration} from '../../assets/illustrations';
import {colors, fonts, sizes} from '../../assets/theme';
import {Button} from '../components';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HomeIllustration
        width={sizes.appWidth(20.44581)}
        height={sizes.appHeight(16.15719)}
        style={styles.illustartion}
      />

      <View style={styles.welcomeContainer}>
        <View style={styles.text}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.titleBold}>Bloggr</Text>
          </Text>
          <Text style={styles.body}>
            Bloggr allows you to disover your favorite bloggers and follow their
            writings and albums. We also have a dedicated todo application to
            keep you productive.
          </Text>
        </View>

        <Button text="Check Out Bloggrs" style={styles.button} />
      </View>

      <Button
        prefixIcon={<Profile />}
        variant="text"
        text="My Resume"
        style={styles.resumeButton}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  resumeButton: {
    marginTop: sizes.appHeight(2),
    gap: sizes.appWidth(0.5),
  },
  button: {
    maxWidth: sizes.appWidth(11.9375),
    maxHeight: sizes.appHeight(3.75),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
    alignItems: 'center',
  },
  illustartion: {
    marginTop: sizes.appHeight(4.5),
    width: sizes.appWidth(20.44581),
    height: sizes.appHeight(16.15719),
  },
  welcomeContainer: {
    gap: sizes.appHeight(2.5),
    maxWidth: sizes.appWidth(16.0625),
  },
  text: {gap: sizes.appHeight(1.25)},
  title: {
    ...fonts.family,
    marginTop: sizes.appHeight(2.34),
    fontSize: sizes.appWidth(2),
    fontWeight: '300',
    color: colors.grey[900],
    maxWidth: sizes.appWidth(11.1875),
  },
  titleBold: {fontWeight: '700'},
  body: {
    ...fonts.family,
    fontSize: sizes.appWidth(1),
    fontWeight: '500',
    lineHeight: sizes.appWidth(1.25),
    color: colors.grey[400],
  },
});
