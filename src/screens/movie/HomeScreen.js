import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserAuth } from "../../context/AuthContext";
import CustomInput from "../../shared/CustomInput";
import CustomButton from "../../shared/CustomButton";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  <Text>Welcome {username}</Text>
  const navigation = useNavigation();

  const OnSignIn = () => {
    navigation.navigate("SignIn");
  };

  const OnSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.main}>
      <CustomButton
        bgColor='#32cd32'
        text='Log Into Your Account!'
        onPress={OnSignIn}
      />

      <CustomButton
        bgColor='#8ed1fc'
        text="Don't Have An Account? Create One!"
        onPress={OnSignUp}
      />

      <CustomButton
        bgColor='#ff9800'
        text='View the Movie Details Here!'
        //onPress={OnSignInGoogle}
      />
      </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    verticalAlign: 'middle',
    padding: 40,
  },
  tiger: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
});