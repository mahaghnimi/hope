import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function SuiviPatientScreen({ navigation }) {
  const [suivis, setSuivis] = useState([]);

  useEffect(() => {
    // Simuler la récupération des suivis depuis une API ou une base de données
    const suivisFromAPI = [
      { id: 1, medication: 'Aspirin', totalPills: 30, quantityPerDay: 1 },
      { id: 2, medication: 'Paracetamol', totalPills: 20, quantityPerDay: 2 },
      { id: 3, medication: 'Ibuprofen', totalPills: 15, quantityPerDay: 3 },
      { id: 3, medication: 'Ibuprofen', totalPills: 15, quantityPerDay: 3 },
      { id: 3, medication: 'Ibuprofen', totalPills: 15, quantityPerDay: 3 },
      // Ajoutez d'autres médicaments si nécessaire

    ];
    setSuivis(suivisFromAPI);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Suivi des médicaments</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.headerCell}>Médicament</Text>
            <Text style={styles.headerCell}>Total de pilules</Text>
            <Text style={styles.headerCell}>Quantité par jour</Text>
          </View>
          {suivis.map((suivi) => (
            <View key={suivi.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{suivi.medication}</Text>
              <Text style={styles.tableCell}>{suivi.totalPills}</Text>
              <Text style={styles.tableCell}>{suivi.quantityPerDay}</Text>
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
  },
});
