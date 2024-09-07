import React from "react";
import { Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={["#92a3fd", "#9dceff"]}
      start={{ x: 0.7, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("../../assets/main-logo.png")}
        style={styles.logo}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 390,
    height: 390,
  },
});

export default SplashScreen;
