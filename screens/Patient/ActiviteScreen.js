import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header';  // Importez le composant Header
import Footer from './Footer';  // Importez le composant Footer

export default function ActiviteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/sport.png')} // Chemin de votre image
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Pratiquer une activité physique régulière :</Text>
        <Text style={styles.text}>
          La pratique d’une activité sportive régulière favorise le bon fonctionnement du système immunitaire tout en contribuant à l’oxygénation des cellules.{"\n"}
          De plus, le sport est un excellent moyen pour lutter contre l’obésité et le surpoids, tout deux facteurs de risques du cancer du sein. Pour rester en bonne santé, il est recommandé de pratiquer 30 minutes d’exercice quotidien à raison de 5 fois par semaine.  
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
