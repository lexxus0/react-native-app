import React from "react";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../navigation/types";
import Icon from "react-native-vector-icons/Ionicons";

type OnBoardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OnBoarding1"
>;

type Props = {
  navigation: OnBoardingScreenNavigationProp;
};

const OnBoarding1 = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/board1.png")}
        style={styles.image}
      ></Image>
      <Image
        style={styles.imageGirl}
        source={require("../../../assets/girl.png")}
      ></Image>
      <View style={styles.textView}>
        <Text style={styles.headText}>Track Your Goal</Text>
        <Text style={styles.text}>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("OnBoarding2")}
      >
        <Icon name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  image: {
    width: 400,
    height: 390,
  },
  imageGirl: {
    position: "absolute",
    left: -7,
    top: -15,
  },
  headText: {
    fontWeight: "700",
    marginTop: 20,
    fontSize: 24,
    color: "#1d1617",
    marginBottom: 20,
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    color: "#7b6f72",
  },
  textView: {
    marginTop: 5,
    paddingLeft: 28,
    paddingRight: 71,
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
});

export default OnBoarding1;
