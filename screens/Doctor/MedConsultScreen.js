import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ImageBackground } from 'react-native';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import { useNavigation } from '@react-navigation/native';

export default function ConsultationenligneScreen({ navigation }) {
  
  const handleJoinMeeting = () => {
    // Replace 'URL_GOOGLE_MEET' with your actual Google Meet meeting URL
    const googleMeetURL = 'https://meet.google.com/your-meeting-url';
    Linking.openURL(googleMeetURL);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header /> 
      <ImageBackground source={require('../../assets/images/enligne.png')} style={styles.container}>
        <Text style={styles.title}>Creér et partager votre réunion</Text>
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
