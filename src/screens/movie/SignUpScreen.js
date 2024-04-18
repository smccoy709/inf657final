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
  import { UserAuth } from "../../context/AuthContext";
  import { useNavigation } from "@react-navigation/native";
  
  export default function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");
  
    const { height } = useWindowDimensions();
  
    const { createUser } = UserAuth();
    const navigation = useNavigation();
  
    const onRegister = async (e) => {
      e.preventDefault();
      const data = { username, email, password, conformPassword };
      console.log(data);
      try {
        await createUser(email, password).then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigation.navigate("Home");
        });
      } catch (err) {
        console.log(err);
      }
      setUsername("");
      setEmail("");
      setPassword("");
      setConformPassword("");
    };
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Conform Password"
          value={conformPassword}
          setValue={setConformPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign Up" onPress={onRegister} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#ffe4b5",
      padding: 40,
    },
    tiger: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });