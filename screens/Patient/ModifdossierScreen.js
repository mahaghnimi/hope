import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function ModifdossierScreen({ navigation }) {
  const [dossiers, setDossiers] = useState([]);

  useEffect(() => {
    const fetchDossiers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'dossiers'));
        const fetchedDossiers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDossiers(fetchedDossiers);
      } catch (error) {
        console.error('Error fetching dossiers:', error);
      }
    };

    fetchDossiers();
  }, []);

  return (
    <View style={styles.container}>
      <Header /> 
      <Text style={styles.title}>Modifier votre dossier médical</Text>
      {/* Display dossiers */}
      <FlatList
        data={dossiers}
        renderItem={({ item }) => (
          <View style={styles.dossierContainer}>
            <Text style={styles.dossierText}>ID: {item.id}</Text>
            {/* Display other fields of the dossier */}
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#FF1493',
  },
  dossierContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  dossierText: {
    fontSize: 16,
    color: '#333333',
  },
});
