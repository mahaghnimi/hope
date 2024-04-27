import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function ValidationScreen({ navigation }) {

  const handleConfirm = () => {
    // Logique à exécuter lorsque le bouton "Confirmer" est pressé
    console.log("Bouton 'Confirmer' pressé");
  };

  const handleReject = () => {
    // Logique à exécuter lorsque le bouton "Refuser" est pressé
    console.log("Bouton 'Refuser' pressé");
  };

  return (
    <View style={styles.container}>
      <Header />
      
      {/* Espace vide */}
      <View style={styles.space}></View>

      {/* Boutons en bas de la page */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirmer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleReject}>
          <Text style={styles.buttonText}>Refuser</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer avec width: 100% */}
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  space: {
    flex: 1,
    // Espace vide
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: '#FF1493', // Bleu
  },
  rejectButton: {
    backgroundColor: '#FF1493', // Rouge
  },
  buttonText: {
    color: '#FFF', // Texte en blanc
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%', // Pour occuper toute la largeur de l'écran
  },
});
