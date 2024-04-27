import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function ModifdossierScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header /> 
      <Text style={styles.title}>Modifier votre dossier médical</Text>
      {/* Empty space for the list of medical records */}
      <View style={styles.listContainer}>
       
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#FF1493',
  },
  listContainer: {
    flex: 1, // Fill remaining space
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
});
