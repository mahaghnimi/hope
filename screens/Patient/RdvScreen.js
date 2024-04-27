import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { db, FIREBASE_AUTH } from '../../firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";


export default function RdvScreen({ navigation }) {
  const [appointments, setAppointments] = useState([])
  console.log(JSON.stringify(appointments))


  useEffect(() => {
    const fetchData = async () => {
      try {

        const appointmentsRef = collection(db, 'appointments');
        const appointmentsSnapshot = await getDocs(appointmentsRef);
        const data = appointmentsSnapshot.docs.map((doc) => doc.data());
        setAppointments(data);
      } catch (error) {
        console.log(error)
      }

    }

    fetchData();
  }, []);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const doctors = [
    { id: 1, name: 'Dr. John Doe', availableSlots: ['10:00 AM', '02:00 PM', '04:00 PM'] },
    { id: 2, name: 'Dr. Jane Smith', availableSlots: ['09:00 AM', '11:00 AM', '03:00 PM'] },
    { id: 3, name: 'Dr. Michael Johnson', availableSlots: ['08:00 AM', '01:00 PM', '05:00 PM'] },
  ];

  const handleDoctorPress = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedSlot(null);
  };

  const handleSlotPress = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Choisissez un médecin :</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.doctorButton, { backgroundColor: selectedDoctor?.id === item.id ? '#FF1493' : '#DDDDDD' }]}
            onPress={() => handleDoctorPress(item)}
          >
            <Text style={styles.doctorButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedDoctor && (
        <View style={styles.availabilityContainer}>
          <Text style={styles.availabilityTitle}>Choisissez un créneau horaire :</Text>
          <FlatList
            data={selectedDoctor.availableSlots}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.slotButton, { backgroundColor: selectedSlot === item ? '#FF1493' : '#DDDDDD' }]}
                onPress={() => handleSlotPress(item)}
              >
                <Text style={styles.slotButtonText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      {selectedSlot && (
        <TouchableOpacity style={styles.confirmButton} onPress={() => alert(`Appointment booked with ${selectedDoctor.name} at ${selectedSlot}`)}>
          <Text style={styles.confirmButtonText}>Confirmer le rendez-vous</Text>
        </TouchableOpacity>
      )}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  doctorButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  doctorButtonText: {
    fontSize: 16,
  },
  availabilityContainer: {
    marginTop: 20,
  },
  availabilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  slotButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  slotButtonText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#FF1493',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
