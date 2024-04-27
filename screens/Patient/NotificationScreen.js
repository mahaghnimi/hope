import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Notifications</Text>
        </View>
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
    justifyContent: 'flex-start', // Alignement du contenu en haut de la vue
  },
  titleContainer: {
    alignItems: 'center', // Alignement du titre au centre horizontalement
    marginTop: 20, // Marge en haut du titre
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
