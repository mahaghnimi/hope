import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function SuiviPatientScreen({ navigation }) {
  const [medications, setMedications] = useState([]);
  const [doctorName, setDoctorName] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'medications'), (snapshot) => {
      const medicationsData = [];
      snapshot.forEach((doc) => {
        medicationsData.push({ id: doc.id, ...doc.data() });
      });
      setMedications(medicationsData);
    });

    const fetchDoctorName = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const doctorEmail = user.email;
          const doctorQuery = query(collection(db, 'doctors'), where('email', '==', doctorEmail));
          const querySnapshot = await getDocs(doctorQuery);
          querySnapshot.forEach((doc) => {
            setDoctorName(doc.data().name);
          });
        }
      } catch (error) {
        console.error('Error fetching doctor name:', error);
      }
    };

    fetchDoctorName();

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>{doctorName}</Text>
        <Text style={styles.subtitle}>Suivi des médicaments</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.headerCell}>Médicament</Text>
            <Text style={styles.headerCell}>Total de pilules</Text>
            <Text style={styles.headerCell}>Quantité par jour</Text>
          </View>
          {medications.map((medication) => (
            <View key={medication.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{medication.medicationName}</Text>
              <Text style={styles.tableCell}>{medication.totalPills}</Text>
              <Text style={styles.tableCell}>{medication.quantityPerDay}</Text>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF1493',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493',
  },
  table: {
    borderWidth: 1,
    borderColor: '#FF1493',
    borderRadius: 5,
    overflow: 'hidden',
    width: '90%',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FF1493',
  },
  headerCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#FF1493',
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 192, 203, 0.8)',
    color: '#FF1493',
  },
});
