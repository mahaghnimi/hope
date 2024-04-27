import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header'; 
import Footer from './Footer';

export default function AlimentationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/food.png')} // Chemin de votre image
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Alimentation équilibrée :</Text>
        <Text style={styles.text}>
          S’il n’existe pas de recette miracle, adopter une alimentation équilibrée permet de rester en bonne santé.{"\n"}
          - En effet, l’alimentation agit comme un facteur de protection contre l’apparition de nombreuses pathologies.{"\n"}
          - Il convient donc de privilégier des repas riches en fibres, en vitamines et antioxydants.{"\n"}
          - Pour cela, les fruits, légumes et céréales complètes se révèlent être de véritables alliés contre le développement de certains cancers.
        </Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 130, // Ajustez la taille de votre logo selon vos besoins
    height: 120,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    lineHeight: 23,
  },
});
