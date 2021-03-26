import React from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Navbar } from "../components";
import { COLORS, FONTS } from "../constants";
import {
  Education,
  Sxg,
  Work,
  VidyaSadan,
  Emoji,
  Html,
  Css,
  BootStrap,
  JS,
  VueJS,
  Php,
  Laravel,
  Illustrator,
  Flutter,
} from "../constants/icons";
import { Me } from "../constants/images";

const Resume = ({ navigation }) => {
  function renderInfo() {
    return (
      <View style={{ alignItems: "center", marginTop: 46, marginBottom: 37 }}>
        <Me
          style={{
            elevation: 25,
            borderRadius: 41,
            shadowColor: "#D0D0D0",
            shadowRadius: 99,
            shadowOffset: 99,
            shadowOpacity: 0.8,
          }}
        />

        <Text
          style={{
            color: COLORS.textSeconday,
            marginTop: 24,
            ...FONTS.h2,
            lineHeight: 29,
            fontWeight: "600",
          }}
        >
          Rahul Raj Dahal
        </Text>
        <Text
          style={{
            color: "#AAAAAA",
            marginTop: 6,
            ...FONTS.body2,
            lineHeight: 17,
            fontWeight: "600",
          }}
        >
          rahulrajdahal@gmail.com
        </Text>
      </View>
    );
  }

  function renderDetails() {
    const details = [
      {
        educations: [
          {
            _id: 1,
            name: "St. Xavier’s College (Current)",
            address: "Maitighar, Nepal - B.Sc.CSIT",
          },
          {
            _id: 2,
            name: "St. Xavier’s School (2017)",
            address: "Jawalakhel, Lalitpur - HSEB (Physics)",
          },
          {
            _id: 3,
            name: "St. Xavier’s School (2015)",
            address: "Godavari, Lalitpur - SLC",
          },
        ],
        work: {
          _id: 1,
          name: "Vidya Sadan School (2018-19)",
          subjects: "Computer Science + ODTE + Moral Science Teacher",
        },
        skills: [
          { _id: 1, logo: <Html /> },
          { _id: 2, logo: <Css /> },
          { _id: 3, logo: <BootStrap /> },
          { _id: 4, logo: <JS /> },
          { _id: 5, logo: <VueJS /> },
          { _id: 6, logo: <Php /> },
          { _id: 7, logo: <Laravel /> },
          { _id: 8, logo: <Illustrator /> },
          { _id: 9, logo: <Flutter /> },
        ],
      },
    ];

    const renderItem = ({ item }) => {
      return (
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Education />

            <Text
              style={{
                color: COLORS.textSeconday,
                ...FONTS.body2,
                lineHeight: 17,
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              Education
            </Text>
          </View>

          {item.educations.map((education) => (
            <View
              key={education._id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Sxg />
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    color: COLORS.text,
                    ...FONTS.body1,
                    lineHeight: 19,
                    fontWeight: "600",
                  }}
                >
                  {education.name}
                </Text>
                <Text
                  style={{
                    color: COLORS.textSeconday,
                    ...FONTS.body2,
                    lineHeight: 17,
                    fontWeight: "600",
                    marginTop: 6,
                  }}
                >
                  {education.address}
                </Text>
              </View>
            </View>
          ))}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
              marginTop: 60,
            }}
          >
            <Work />

            <Text
              style={{
                color: COLORS.textSeconday,
                ...FONTS.body2,
                lineHeight: 17,
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              Work Experience
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <VidyaSadan />
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  color: COLORS.text,
                  ...FONTS.body1,
                  lineHeight: 19,
                  fontWeight: "600",
                }}
              >
                {item.work.name}
              </Text>
              <Text
                style={{
                  color: COLORS.textSeconday,
                  ...FONTS.body2,
                  lineHeight: 17,
                  fontWeight: "600",
                  marginTop: 6,
                  width: 182,
                }}
              >
                {item.work.subjects}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
              marginTop: 60,
            }}
          >
            <Emoji />

            <Text
              style={{
                color: COLORS.textSeconday,
                ...FONTS.body2,
                lineHeight: 17,
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              Skills
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              alignSelf: "center",
              width: 327,
              marginBottom: 33,
            }}
          >
            {item.skills.map((skill) => (
              <View
                key={skill._id}
                style={{ marginRight: 22, marginBottom: 27 }}
              >
                {skill.logo}
              </View>
            ))}
          </View>

          <Button
            text="Go to App"
            backgroundColor="rgba(9, 132, 227, 0.2)"
            style={{ alignSelf: "center", marginBottom: 60, marginTop: 0 }}
            onPress={() => navigation.navigate("Users")}
          />
        </>
      );
    };

    return (
      <FlatList
        data={details}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      <Navbar lightText="My" text="Resume" />

      {renderInfo()}

      {renderDetails()}
    </View>
  );
};

export default Resume;
