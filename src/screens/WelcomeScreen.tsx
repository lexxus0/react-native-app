import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/types";

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/main-logo.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={[styles.welcomeText, styles.habitsText]}>
        to Main Habits
      </Text>
      <Text style={styles.text}>
        Explore the app. Find some peace of mind to archieve good habits.
      </Text>
      <Image
        source={require("../../assets/Group.png")}
        style={styles.girlImage}
      ></Image>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OnBoarding1")}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    backgroundColor: "#8e97fd",
    height: 900,
    textAlign: "center",
  },
  button: {
    borderRadius: 30,
    width: 360,
    height: 60,
    backgroundColor: "#ebeaec",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  welcomeText: {
    fontWeight: "600",
    fontSize: 28,
    textAlign: "center",
    color: "#ffeccc",
  },
  habitsText: {
    fontStyle: "italic",
    fontWeight: "300",
    marginBottom: 10,
    marginTop: 8,
    fontSize: 24,
    color: "#ffeccc",
  },
  text: {
    fontWeight: "300",
    fontSize: 16,
    textAlign: "center",
    color: "#ebeaec",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  girlImage: {
    marginBottom: 40,
  },
});

export default WelcomeScreen;
