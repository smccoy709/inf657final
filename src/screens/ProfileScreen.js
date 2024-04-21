import {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
  } from "react-native";
  import React, { useState } from "react";
  import CustomInput from "../shared/CustomInput";
  import CustomButton from "../shared/CustomButton";
  import { UserAuth } from "../context/AuthContext";
  import { useNavigation } from "@react-navigation/native";
  import { auth } from "../firebase";
  
  export default function ProfilePage() {
    const [email, setEmail] = useState(auth.currentUser.email);
    const [username, setUsername] = useState(auth.currentUser.username);
  
    const { height } = useWindowDimensions();
    const { updateUser, logOut } = UserAuth();
    const navigation = useNavigation();
  
    const onEdit = async (e) => {
      e.preventDefault();
      const data = { username, email };
      console.log(data);
      try {
        await updateUser(username, email);
      } catch (err) {
        console.log(err);
      }
    };
  
    const onLogOut = async() => {
      try {
        window.localStorage.clear(username);
        console.warn("You are logged out");
        navigation.navigate("Home");
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Profile Page</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Edit Profile" onPress={onEdit} />
        <CustomButton text="Logout" onPress={onLogOut} />
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
    title: { fontSize: 30, fontWeight: "bold" },
  });