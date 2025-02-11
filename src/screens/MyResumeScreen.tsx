import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Bootstrap,
  Css,
  Flutter,
  Html,
  Illustrator,
  Js,
  Laravel,
  Php,
  Vue,
} from '../../assets/icons';
import {Me, Sxg, Vidyasadan} from '../../assets/images';
import {colors, sizes} from '../../assets/theme';
import {Button, Navbar} from '../components';

const MyResumeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar lightText="My" text="Resume" />

        <View style={styles.profileContainer}>
          <Me style={styles.photo} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Rahul Raj Dahal</Text>
            <Text style={styles.email}>rahulrajdahal@gmail.com</Text>
          </View>
        </View>

        <Education />
        <Button
          text="Go to App"
          style={{
            marginVertical: sizes.appHeight(3.81),
            minWidth: sizes.appWidth(11.9375),
            alignSelf: 'center',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyResumeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1.5),
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: sizes.appHeight(2.87),
    marginBottom: sizes.appHeight(2.31),
  },
  photo: {
    elevation: 25,
    borderRadius: 41,
    shadowColor: '#D0D0D0',
    shadowRadius: 99,
    shadowOffset: {width: 15, height: 15},
    shadowOpacity: 0.8,
  },
  nameContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: sizes.appHeight(0.37),
    marginTop: sizes.appHeight(1.5),
  },
  name: {
    color: colors.grey['400'],
    fontSize: sizes.appWidth(1.5),
    fontWeight: '600',
  },
  email: {
    color: '#AAAAAA',
    fontWeight: '600',
    fontSize: sizes.appWidth(0.875),
  },
});

const Education = () => {
  const educations = [
    {
      _id: 1,
      name: 'St. Xavier’s College (Current)',
      address: 'Maitighar, Nepal - B.Sc.CSIT',
    },
    {
      _id: 2,
      name: 'St. Xavier’s School (2017)',
      address: 'Jawalakhel, Lalitpur - HSEB (Physics)',
    },
    {
      _id: 3,
      name: 'St. Xavier’s School (2015)',
      address: 'Godavari, Lalitpur - SLC',
    },
  ];

  const works = [
    {
      _id: 1,
      name: 'Vidya Sadan School (2018-19)',
      subjects: 'Computer Science + ODTE + Moral Science Teacher',
    },
    {
      _id: 2,
      name: 'Vidya Sadan School (2018-19)',
      subjects: 'Computer Science + ODTE + Moral Science Teacher',
    },
    {
      _id: 3,
      name: 'Vidya Sadan School (2018-19)',
      subjects: 'Computer Science + ODTE + Moral Science Teacher',
    },
  ];

  const skills = [
    {_id: 1, logo: <Html />},
    {_id: 2, logo: <Css />},
    {_id: 3, logo: <Bootstrap />},
    {_id: 4, logo: <Js />},
    {_id: 5, logo: <Vue />},
    {_id: 6, logo: <Php />},
    {_id: 7, logo: <Laravel />},
    {_id: 8, logo: <Illustrator />},
    {_id: 9, logo: <Flutter />},
  ];

  return (
    <View>
      <View style={{flexDirection: 'column', gap: sizes.appHeight(3.75)}}>
        <View style={{flexDirection: 'column', gap: sizes.appHeight(1)}}>
          <ResumeCategoryTitle emoji="📖" title="Education" />
          <View style={{flexDirection: 'column', gap: sizes.appHeight(1.25)}}>
            {educations.map(education => (
              <ResumeCard
                icon={<Sxg />}
                key={education._id}
                subTitle={education.address}
                title={education.name}
              />
            ))}
          </View>
        </View>

        <View style={{flexDirection: 'column', gap: sizes.appHeight(1)}}>
          <ResumeCategoryTitle emoji="💼" title="Work Experience" />
          <View style={{flexDirection: 'column', gap: sizes.appHeight(1.25)}}>
            {works.map(work => (
              <ResumeCard
                icon={<Vidyasadan />}
                key={work._id}
                subTitle={work.subjects}
                title={work.name}
              />
            ))}
          </View>
        </View>

        <View style={{flexDirection: 'column', gap: sizes.appHeight(1)}}>
          <ResumeCategoryTitle emoji="🤓" title="Skills" />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: sizes.appHeight(1.37),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {skills.map(skill => (
              <ResumeCard icon={skill.logo} key={skill._id} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

type ResumeCardProps = {title?: string; subTitle?: string; icon: ReactNode};
const ResumeCard = ({subTitle, title, icon}: Readonly<ResumeCardProps>) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: sizes.appWidth(0.75),
      }}>
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

type ResumeCategoryTitleProps = {title: string; emoji: string};
const ResumeCategoryTitle = ({
  emoji,
  title,
}: Readonly<ResumeCategoryTitleProps>) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: sizes.appWidth(0.5),
        marginBottom: sizes.appHeight(1),
      }}>
      <Text style={{fontSize: sizes.appWidth(1.5)}}>{emoji}</Text>
      <Text
        style={{
          fontSize: sizes.appWidth(0.875),
          fontWeight: '700',
          color: colors.grey['400'],
          textTransform: 'uppercase',
        }}>
        {title}
      </Text>
    </View>
  );
};
