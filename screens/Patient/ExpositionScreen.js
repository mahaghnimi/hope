import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header';  // Importer le composant Header
import Footer from './Footer';  // Importer le composant Footer

export default function ExpositionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/danger.png')} // Chemin de votre image
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Réduire son exposition aux produits chimiques :</Text>
        <Text style={styles.text}>
          Si le rôle des perturbateurs endocriniens dans la survenue de cancer du sein est difficile à mesurer, la prudence reste de mise. Produits cosmétiques et produits ménagers peuvent se révéler dangereux pour la santé, tout comme le Bisphénol A (BPA) contenu dans les bouteilles en plastique et les boîtes de conserve. Le BPA est reconnu comme nocif pour le système hormonal et reproducteur.
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
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 130, // Ajustez la taille de votre logo selon vos besoins
    height: 130,
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
