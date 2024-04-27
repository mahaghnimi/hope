import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header'; 
import Footer from './Footer'; 
import { useNavigation } from '@react-navigation/native';

export default function MedicaleScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/medecine.png')} // Chemin de votre image
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Consultation médicale régulière :</Text>
        <Text style={styles.text}>
          Assurez-vous de consulter régulièrement votre professionnel de la santé pour des examens de santé réguliers et discutez de vos facteurs de risque individuels de cancer du sein.
        </Text>
      </View>
      <Footer style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  content: {
    flex: 1, // Take up remaining space
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 50,
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
