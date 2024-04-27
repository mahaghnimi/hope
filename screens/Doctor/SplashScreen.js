import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function SplashScreen({ navigation }) {
 useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CompteScreen'); // Remplacez 'Home' par le nom de votre écran d'accueil
    }, 2000); // Changer 2000 à 3000 si vous voulez que l'interface reste ouverte pendant 3 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <View style={styles.container}>
        <Image source={require('../../assets/images/ho.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Bienvenue sur HOPE </Text>
  
     
      
     
     
    </View>

  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        width: '100%', // Définir la largeur à 100% de l'écran
        height: '100 %',
      },
  container: {
    flex: 1,
    backgroundColor:'#FFC0CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 250,
    marginBottom: 20,
},
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    margin: 20,
    color: '#FF69B4',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
   Text: {
      fontSize: 30,
      fontWeight: 'bold',
      color:  '#FFB6C1',
      fontStyle: 'italic', // Texte en italique
      letterSpacing: 1, // Espacement entre les lettres
      // Hauteur de ligne
  },
  
});

