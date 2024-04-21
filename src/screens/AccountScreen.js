import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { userAuth } from "../context/AuthContext";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import account from "../../assets/images/account.png";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {signIn, logOut} = userAuth();

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
  const onSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.main}>
          <Image
        source={account}
        style={(styles.tiger, { height: height * 0.3 })}
        resizeMode="contain"
      />
        <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
        />

        <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />

        <CustomButton
            bgColor='#32cd32'
            text='Log Into Your Account!'
            onPress={onSignIn}
        />

        <CustomButton
            bgColor='#8ed1fc'
            text="Don't Have An Account? Create One!"
            onPress={onSignUp}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    padding: 40,
    marginTop: 100,
  },
  account: {
    width: "70%",
    height: 100,
    maxHeight: 100,
    maxWidth: 500,
  },
});