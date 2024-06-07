// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
