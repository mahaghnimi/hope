import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; 
import { useNavigation } from '@react-navigation/native';

export default function ConseilsScreen({ navigation }) {
  
  const adviceList = [
    { id: 1, title: 'Pratiquer une activité physique régulière', image: require('../../assets/images/sport.png'), screen: 'ActiviteScreen' },
    { id: 2, title: 'Alimentation équilibrée ', image: require('../../assets/images/food.png'), screen: 'AlimentationScreen' },
    { id: 3, title: 'Limiter la consommation d’alcool et de tabac', image: require('../../assets/images/smoke.png'), screen: 'ConsommationScreen' },
    { id: 4, title: 'Consultation médicale régulière', image: require('../../assets/images/medecine.png'), screen: 'MedicaleScreen' },
    { id: 5, title: 'Réduire son exposition aux  produits chimiques', image: require('../../assets/images/danger.png'), screen: 'ExpositionScreen' },
  ];

  const handleCardPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
       <Header />
      <Text style={styles.headerText}>Prévention du cancer du sein : Adopter une bonne hygiène de vie</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {adviceList.map(advice => (
          <TouchableOpacity key={advice.id} style={styles.card} onPress={() => handleCardPress(advice.screen)}>
            <Image source={advice.image} style={styles.image} />
            <Text style={styles.title}>{advice.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
