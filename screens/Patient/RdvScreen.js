import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer'; 

export default function ViewAvailableDatesScreen() {
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'appointments'), (querySnapshot) => {
      const datesData = [];
      querySnapshot.forEach((doc) => {
        const { doctor, dates } = doc.data();
        dates.forEach((dateObj) => {
          datesData.push({ doctor, date: dateObj.date, slots: dateObj.slots });
        });
      });
      setAvailableDates(datesData);
    });

    // Se désabonner lorsque le composant est démonté
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.dateItem}>
      <Text style={styles.dateText}>Docteur : {item.doctor}</Text>
      <Text style={styles.dateText}>Date : {item.date}</Text>
      <Text style={styles.slotsText}>Créneaux disponibles :</Text>
      {item.slots.length > 0 ? (
        item.slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={styles.slotButton}
            onPress={() => handleSlotPress(item.doctor, item.date, slot)}
          >
            <Text style={styles.slotButtonText}>{slot}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Aucun créneau disponible</Text>
      )}
    </TouchableOpacity>
  );

  const handleSlotPress = async (doctor, date, slot) => {
    try {
      // Ajouter le rendez-vous sélectionné à la collection "selectedAppointments" dans Firestore
      const docRef = await addDoc(collection(db, 'selectedAppointments'), {
        doctor,
        date,
        slot,
        createdAt: serverTimestamp()
      });

      console.log('Rendez-vous enregistré avec succès:', docRef.id);
      Alert.alert('Rendez-vous enregistré avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du rendez-vous:', error);
      Alert.alert('Erreur lors de l\'enregistrement du rendez-vous. Veuillez réessayer plus tard.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Dates disponibles</Text>
      <FlatList
        data={availableDates}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493', 
    textAlign: 'center',
  },
  dateItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  slotsText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  slotButton: {
    backgroundColor: '#FF1493',
    paddingVertical: 6,
    paddingHorizontal: 150,
    borderRadius: 5,
    marginTop: 5,
  },
  slotButtonText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
