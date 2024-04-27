import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './Header'; 
import Footer from './Footer'; 

export default function ConsommationScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/smoke.png')} // Chemin de votre image
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Limiter la consommation d’alcool et de tabac :</Text>
        <Text style={styles.text}>
          Tout le monde sait maintenant que la consommation d’alcool et de tabac favorise l’émergence des maladies cardiovasculaires. Mais savez-vous qu’elle augmente également le risque de développer un cancer du sein ? Selon l’INCa, 17 % des cancers du sein sont liés à l’absorption d’alcool même modérée. En effet l’alcool accroît le taux d’œstrogène, hormones qui jouent un rôle majeur dans le développement des cellules cancéreuses.
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
});
