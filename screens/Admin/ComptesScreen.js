import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function ComptesScreen({ navigation }) {

  const handleCardPress = (action) => {
    switch (action) {
      case 'Création':
        console.log('Action sélectionnée :', action);
        navigation.navigate('GererCompteScreen');
        break;
      case 'Validation':
        console.log('Action sélectionnée :', action);
        navigation.navigate('ValidationScreen'); // Naviguer vers la page "ValidationScreen"
        break;
      case 'Modification':
        console.log('Action sélectionnée :', action);
        navigation.navigate('ModifScreen');
        // Ajoutez ici la navigation vers la page de modification si nécessaire
        break;
      case 'Archiver':
        console.log('Action sélectionnée :', action);
        navigation.navigate('ArchiveScreen');
        // Ajoutez ici la navigation vers la page d'archivage si nécessaire
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Création')}>
          <Text style={styles.cardText}>Création</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Validation')}>
          <Text style={styles.cardText}>Validation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Modification')}>
          <Text style={styles.cardText}>Modification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Archiver')}>
          <Text style={styles.cardText}>Archiver</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)', // Light Pink
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '60%',
    height: 90,
    marginVertical: 10,
    backgroundColor: '#FFC0CB', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#FF69B4', 
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF1493',
  },
});
