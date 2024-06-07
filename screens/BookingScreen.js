// screens/BookingScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { firestore, auth } from '../firebaseConfig';

export default function BookingScreen({ route, navigation }) {
  const { vendorId } = route.params;
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  const handleBooking = () => {
    const user = auth.currentUser;
    firestore.collection('bookings').add({
      vendorId,
      userId: user.uid,
      date,
      details,
    }).then(() => {
      navigation.goBack();
    }).catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Details" value={details} onChangeText={setDetails} style={styles.input} />
      <Button title="Book Service" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
