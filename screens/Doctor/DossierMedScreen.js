import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot, query} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Header from './Header';
import Footer from './Footer';

export default function DossierMedScreen() {
  const [patientData, setPatientData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'symptoms')), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setPatientData(data);
    });

    // Cleanup function
    return () => {
      unsubscribe();
    };
  }, []);

  const handleViewDetail = (patientId) => {
    navigation.navigate('MedDossierScreen', { patientId });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Liste des dossiers médicaux</Text>
        {patientData.map(patient => (
          <TouchableOpacity
            key={patient.id}
            style={styles.patientCard}
            onPress={() => handleViewDetail(patient.id)}
          >
            <Text style={styles.patientName}>Nom du patient: {patient.patientName}</Text>
            <Text style={styles.email}>Email: {patient.email}</Text>
            {patient.symptoms && (
              <Text style={styles.symptoms}>Symptômes: {patient.symptoms.join(', ')}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#880088',
  },
  patientCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF1493',
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FF1493',
  },
  email: {
    fontSize: 14,
    color: '#FF1493',
    fontWeight: 'bold',
  },
  symptoms: {
    fontSize: 14,
    color: '#666',
  },
});
