import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../shared/CustomInput";
import CustomButton from "../../shared/CustomButton";
import Profile from './ProfileScreen';
import { UserAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const { signIn, logOut } = UserAuth();

  const navigation = useNavigation();

  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      console.log("user signedIn");
      navigation.navigate("Profile");
    } catch (err) {
      console.log(err);
    }
  };

  const OnLogOut = async () => {
    try {
      await logOut();
      console.warn("You are logged out");
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  };

  const OnSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.main}>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={onSignIn} />

      <CustomButton bgColor="#607d8b" text="Log Out" onPress={OnLogOut} />
      <CustomButton
        bgColor="white"
        text="Don't Have an Account? Create One!"
        onPress={OnSignUp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "#ffe4b5",
    padding: 40,
  },
  tiger: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
});