import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Navigation';
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <Nav />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});