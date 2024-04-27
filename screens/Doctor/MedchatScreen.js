import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis React Navigation
import { Ionicons } from '@expo/vector-icons';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; 

export default function ChatScreen() {
  const navigation = useNavigation(); // 


  const patientsData = [
    { id: 1, name: "Alice Dupont", available: true, image: require('../../assets/images/hh.jpg')},
    { id: 2, name: "Bob Martin", available: false, image: require('../../assets/images/hh.jpg') },
    { id: 3, name: "Carol Leclerc", available: true, image: require('../../assets/images/hh.jpg')},
    { id: 4, name: "David Dubois", available: true, image: require('../../assets/images/hh.jpg') },
    { id: 5, name: "Emma Laurent", available: false, image: require('../../assets/images/hh.jpg') },
    { id: 6, name: "Frank Lefevre", available: true, image: require('../../assets/images/hh.jpg') }
  ];
  
  const PatientItem = ({ patient }) => (
    <TouchableOpacity onPress={() => handlePatientPress(patient)}>
      <View style={styles.doctorItem}>
        <Image source={patient.image} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{patient.name}</Text>

        </View>
      </View>
    </TouchableOpacity>
  );

  const handlePatientPress = (patient) => {
    // Naviguer vers la page "MessageScreen" avec le paramètre du nom du patient
    navigation.navigate('MessageScreen', { patientName: patient.name });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Rechercher votre patiente..." />
        <Ionicons name="search" size={24} color="#FF1493" />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.circularBackground}>
          <Text style={styles.titleText}>Contactez votre patiente(s)</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {patientsData.map(patient => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF1493', // Change text color to contrast with circular background
  },
  circularBackground: {
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    borderRadius: 100, // Use a large value for borderRadius to make it circular
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,

  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  doctorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
