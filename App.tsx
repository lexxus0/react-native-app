import React from "react";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding1 from "./src/screens/onboarding/OnBoarding1";
import OnBoarding2 from "./src/screens/onboarding/OnBoarding2";
import OnBoarding3 from "./src/screens/onboarding/OnBoarding3";
import OnBoarding4 from "./src/screens/onboarding/OnBoarding4";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import SignInScreen from "./src/screens/auth/SignInScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// screenOptions={{ headerShown: false }}
