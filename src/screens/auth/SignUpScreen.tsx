import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const initialValues = {
  username: "",
  email: "",
  password: "",
};

const SignUpScreen = ({ navigation }: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
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
          <Text style={styles.headText}>Create your account</Text>

          <Text style={styles.loginWithEmail}>Or log in with email</Text>
          <View style={styles.formView}>
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              keyboardType="default"
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <TextInput
              placeholder="Email address"
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>
          <View style={styles.checkboxView}>
            <Text style={styles.iHaveRead}>
              I have read the{" "}
              <Text style={styles.privacePolicy}>Privace Policy</Text>
            </Text>
            <TouchableOpacity
              onPress={() => setIsSelected(!isSelected)}
              style={styles.checkbox}
            >
              <Icon
                name={isSelected ? "checkbox" : "square-outline"}
                size={26}
                color={isSelected ? "green" : "lightgray"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.getStarted}>
            <Text style={styles.textGetStarted}>Get started</Text>
          </TouchableOpacity>
          {/* onPress */}

          <Text style={styles.downText}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.signin}>Sign In</Text>
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
  getStarted: {
    borderRadius: 36,
    width: 340,
    height: 60,
    backgroundColor: "#8e97fd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textGetStarted: {
    fontWeight: "500",
    fontSize: 13,
    letterSpacing: 0.05,
    color: "#f6f1fb",
  },
  downText: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#a1a4b2",
    marginTop: 15,
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
  loginWithEmail: {
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#a1a4b2",
    marginBottom: 15,
  },
  textInput: {
    width: 355,
    height: 60,
    backgroundColor: "#f2f3f7",
    borderRadius: 15,
    paddingLeft: 12,
  },
  checkbox: {
    top: -15,
    left: -5,
  },
  checkboxView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 5,
    gap: 125,
  },
  iHaveRead: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.05,
    color: "#a1a4b2",
    marginBottom: 25,
  },
  privacePolicy: {
    color: "#7583ca",
  },
  image: {
    width: 414,
    height: 350,
    position: "absolute",
    zIndex: -5,
    top: 1,
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
    marginBottom: 10,
  },
  signin: {
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

export default SignUpScreen;
