import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ImageBackground } from 'react-native';
import Header from './Header'; // Importer le composant Header
import Footer from './Footer'; // Importer le composant Footer
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function ConsultationenligneScreen({ navigation }) {
  
  const handleJoinMeeting = async () => {
    // Remplacez 'URL_GOOGLE_MEET' par votre URL réelle de réunion Google Meet
    const googleMeetURL = 'https://meet.google.com/your-meeting-url';
    Linking.openURL(googleMeetURL);

    // Enregistrer les détails de la réunion dans Firestore
    try {
      const docRef = await addDoc(collection(db, 'meetings'), {
        joinedAt: serverTimestamp(), // Ajoutez un horodatage pour l'instant où l'utilisateur a rejoint la réunion
      });

      console.log('Détails de la réunion enregistrés avec succès:', docRef.id);
      // Affichez un message de succès ou effectuez d'autres actions après l'enregistrement des détails
    } catch (error) {
      console.error('Erreur lors de l enregistrement des détails de la réunion:', error);
      // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions en cas d'erreur
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header /> 
      <ImageBackground source={require('../../assets/images/enligne.png')} style={styles.container}>
        <Text style={styles.title}>Créez et partagez votre réunion</Text>
        <TouchableOpacity style={styles.button} onPress={handleJoinMeeting}>
          <Text style={styles.buttonText}>Rejoindre la réunion</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    backgroundColor: '#fff',
    width: '100%',
    height: '40%',
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF1493',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
