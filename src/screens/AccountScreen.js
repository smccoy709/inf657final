import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserAuth } from "../context/AuthContext";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const { signIn, logOut } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  <Text>Welcome {username}</Text>
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
  const onSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.main}>
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
    alignItems: 'center',
    verticalAlign: 'middle',
    padding: 40,
  },
  tiger: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
});