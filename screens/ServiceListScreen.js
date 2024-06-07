// screens/ServiceListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { firestore } from '../firebaseConfig';

export default function ServiceListScreen({ navigation }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('vendors').onSnapshot(snapshot => {
      const servicesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(servicesData);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.serviceType}</Text>
            <Button title="Book" onPress={() => navigation.navigate('Booking', { vendorId: item.id })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
