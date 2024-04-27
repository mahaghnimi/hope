import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

export default function PagerdvScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ImageBackground source={require('../../assets/images/rdv.png')} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Prendre un rendez-vous</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RdvScreen')}>
              <Text style={styles.buttonText}>Prendre</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    width: '100%',
    height: '40%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center', // Centrer le contenu verticalement
    alignItems: 'center', // Centrer le contenu horizontalement
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: '#880088',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: '#FF1493',
    borderRadius: 20,
    paddingVertical: 20, // Réduire la hauteur du bouton
    paddingHorizontal: 30, // Réduire la largeur du bouton
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Réduire la taille du texte
    fontWeight: 'bold',
  },
});
