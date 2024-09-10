import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import Icon from "react-native-vector-icons/Ionicons";

type OnBoardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OnBoarding3"
>;

type Props = {
  navigation: OnBoardingScreenNavigationProp;
};

const OnBoarding3 = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/board3.png")}
        style={styles.slide}
      ></Image>
      <View style={styles.textView}>
        <Text style={styles.headText}>Eat Well</Text>
        <Text style={styles.text}>
          Let's start a healthy lifestyle with us, we can determine your diet
          every day. healthy eating is fun
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OnBoarding4")}
      >
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative", backgroundColor: "white" },
  headText: {
    fontWeight: "700",
    fontSize: 24,
    color: "#1d1617",
    marginBottom: 15,
  },
  text: { fontWeight: "400", fontSize: 14, color: "#7b6f72" },
  slide: {
    left: -22,
  },
  button: {
    position: "absolute",
    bottom: 60,
    right: 35,
    backgroundColor: "#92A3FD",
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 3,
  },
  textView: { marginTop: 20, paddingLeft: 28, paddingRight: 71 },
});

export default OnBoarding3;
