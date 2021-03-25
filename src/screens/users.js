import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { store } from "../../App";
import { getPosts } from "../actions/post";

import { Navbar } from "../components";
import { COLORS, FONTS } from "../constants";
import { HomeIcon, Profile } from "../constants/icons";
import user from "../reducers/user";

const Users = ({ navigation }) => {
  const users = store.getState().users;

  function renderUser() {
    const randomBackground = (userId) => {
      if (userId === 1) {
        return "rgba(0, 184, 148, 0.2)";
      } else if (userId === 2) {
        return "rgba(9, 132, 227, 0.2)";
      } else if (userId === 3) {
        return "rgba(232, 67, 147, 0.2)";
      } else if (userId === 4) {
        return "rgba(0, 206, 201, 0.2)";
      } else if (userId === 5) {
        return "rgba(108, 92, 231, 0.2)";
      } else if (userId === 6) {
        return "rgba(225, 112, 85, 0.2)";
      } else if (userId === 7) {
        return "rgba(253, 203, 110, 0.2)";
      }
      return "rgba(45, 52, 54, 0.2)";
    };

    const randomProfile = (userId) => {
      if (userId === 1) {
        return "#00B894";
      } else if (userId === 2) {
        return "#0984E3";
      } else if (userId === 3) {
        return "#E84393";
      } else if (userId === 4) {
        return "#00CEC9";
      } else if (userId === 5) {
        return "#6C5CE7";
      } else if (userId === 6) {
        return "#E17055";
      } else if (userId === 7) {
        return "#FDCB6E";
      }
      return "#2D3436";
    };

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
      >
        {!users.length ? (
          <Text>No Users Yet</Text>
        ) : (
          users.map((user) => (
            <TouchableOpacity
              key={user.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 24,
              }}
              onPress={() => navigation.navigate("BottomNavTab", { user })}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: randomBackground(user.id),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 21,
                }}
              >
                <Profile
                  width={20}
                  height={22.22}
                  style={{ color: randomProfile(user.id) }}
                />
              </View>

              <View style={{ marginLeft: 12 }}>
                <Text
                  style={{
                    color: COLORS.text,
                    ...FONTS.h3,
                    fontWeight: "600",
                    lineHeight: 21.47,
                  }}
                >
                  {user.name}
                </Text>
                <Text
                  style={{
                    color: COLORS.textSeconday,
                    ...FONTS.body2,
                    fontWeight: "500",
                    lineHeight: 16.48,
                  }}
                >
                  {user.username}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <Navbar text="Bloggrs" />

      {renderUser()}
    </View>
  );
};

export default Users;
