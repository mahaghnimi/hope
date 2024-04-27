// GererspecScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function GererspecScreen({ navigation }) {
  const handleButtonPress = (action) => {
    console.log('Action sélectionnée :', action);
    // Ajoutez ici le code pour gérer l'action sélectionnée
  };

  const handleSpecialtyPress = (specialty) => {
    console.log('Spécialité sélectionnée :', specialty);
    // Ajoutez ici le code pour gérer la spécialité sélectionnée
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={[styles.card, styles.marginRight]} onPress={() => handleSpecialtyPress('Cancérologue')}>
            <Text style={styles.cardText}>Cancérologue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleSpecialtyPress('Gynécologue')}>
            <Text style={styles.cardText}>Gynécologue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => handleButtonPress('Ajouter')}>
            <Text style={styles.buttonText}>Ajouter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMargin]} onPress={() => handleButtonPress('Modifier')}>
            <Text style={styles.buttonText}>Modifier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Supprimer')}>
            <Text style={styles.buttonText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)', // Jaune clair
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 90,
  },
  card: {
    width: '40%',
    height: 140,
    width:150,
    backgroundColor: 'pink', // Rose
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF1493', // Bordure rose
  },
  cardText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FF1493', // Rose
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60, // Ajout de la marge entre les cartes et les boutons
  },
  button: {
    backgroundColor: 'pink', // Rose
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FF1493', // Bordure rose
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FF1493', // Rose
  },
  marginRight: {
    marginRight: 20, // Adding margin to the right of the card
  },
  buttonMargin: {
    marginRight: 10, // Adding margin between buttons
  },
});
