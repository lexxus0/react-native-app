import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

type SigInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

type Props = {
  navigation: SigInScreenNavigationProp;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const initialValues = {
  email: "",
  password: "",
};

const SignInScreen = ({ navigation }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Image
            source={require("../../../assets/signup.png")}
            style={styles.image}
          ></Image>
          <TouchableOpacity style={styles.arrowBtn}>
            <Icon name="arrow-back" size={27} color="black" />
          </TouchableOpacity>
          <Text style={styles.headText}>Welcome back!</Text>
          <TouchableOpacity style={styles.facebookBtn}>
            <Text style={styles.facebookText}>Continue with facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleBtn}>
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>
          <Text style={styles.loginWithEmail}>Or log in with email</Text>
          <View style={styles.formView}>
            <TextInput
              placeholder="Email address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              style={styles.textInput}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <TouchableOpacity style={styles.logIn}>
            <Text style={styles.textLogIn}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
          <Text style={styles.downText}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signup}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logIn: {
    borderRadius: 36,
    width: 340,
    height: 60,
    backgroundColor: "#8e97fd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textLogIn: {
    fontWeight: "500",
    fontSize: 13,
    letterSpacing: 0.05,
    color: "#f6f1fb",
  },
  headText: {
    fontWeight: "700",
    fontSize: 28,
    color: "#3f414e",
    marginBottom: 30,
    marginTop: 75,
  },
  facebookBtn: {
    borderRadius: 38,
    width: 340,
    height: 60,
    backgroundColor: "#7583ca",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  facebookText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#f6f1fb",
  },
  googleBtn: {
    borderRadius: 38,
    width: 340,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#a1a4b2",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 20,
  },
  googleText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#3f414e",
  },
  textInput: {
    width: 355,
    height: 60,
    backgroundColor: "#f2f3f7",
    borderRadius: 15,
    paddingLeft: 12,
  },
  loginWithEmail: {
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#a1a4b2",
    marginBottom: 15,
  },
  arrowBtn: {
    position: "absolute",
    left: 20,
    top: 60,
    borderColor: "#f2f3f7",
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
  },
  formView: {
    rowGap: 10,
    marginBottom: 30,
  },
  image: {
    width: 414,
    height: 350,
    position: "absolute",
    zIndex: -5,
    top: 1,
  },
  downText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#a1a4b2",
    marginTop: 15,
  },
  forgot: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#3f414e",
  },
  signup: {
    color: "#8e97fd",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    top: 3,
  },
  error: {
    color: "red",
    marginLeft: 10,
  },
});

export default SignInScreen;
