import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function MedDossierScreen() {
  const [patientName, setPatientName] = useState('John Doe');
  const [medicalRecord, setMedicalRecord] = useState('');

  const handleModifyClick = () => {
    // Handle modification logic here
    alert('Bouton Modifier cliqué!');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.headerText}>Medical Record for {patientName}</Text>
        <Text style={styles.medicalRecordText}>{medicalRecord}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleModifyClick}>
          <Text style={styles.buttonText}>Modifier</Text>
        </TouchableOpacity>
      </View>
      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  main: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: '#880088',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  medicalRecordText: {
    fontSize: 16,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
