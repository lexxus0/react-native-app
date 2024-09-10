import React from "react";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import Icon from "react-native-vector-icons/Ionicons";

type OnBoardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OnBoarding2"
>;

type Props = {
  navigation: OnBoardingScreenNavigationProp;
};

const OnBoarding2 = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/board2.png")}
        style={styles.slide}
      ></Image>
      <Image
        source={require("../../../assets/runner_board2.png")}
        style={styles.runner}
      ></Image>
      <View style={styles.textView}>
        <Text style={styles.headText}>Get Burn</Text>
        <Text style={styles.text}>
          Let's keep burning, to achive yours goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OnBoarding3")}
      >
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  headText: {
    fontWeight: "700",
    marginTop: 200,
    fontSize: 24,
    color: "#1d1617",
    marginBottom: 20,
  },
  runner: {
    width: 290,
    height: 320,
    position: "absolute",
    left: 50,
    top: 80,
  },
  slide: {
    height: 220,
    right: 22,
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    color: "#7b6f72",
  },
  textView: { marginTop: 10, paddingLeft: 28, paddingRight: 71 },
  container: { flex: 1, position: "relative", backgroundColor: "white" },
});

export default OnBoarding2;
