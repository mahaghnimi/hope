import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';


export default function AuthentifScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const auth= FIREBASE_AUTH

  const handleLogin = async () => {
    console.log("test")
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      navigation.navigate('HomeScreen');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode', errorCode);
      console.log('errorMessage', errorMessage);
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };

  return (
    <ImageBackground source={require('../../assets/images/image2.webp')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre adresse email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('CreatecompteScreen')}>
              <Text style={styles.signupButtonText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/faceboook.png')} style={styles.icon} />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/instagram.png')} style={styles.icon} />
          <Text style={styles.socialButtonText}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 90 // Ajoutez marginTop ici pour l'espace entre l'image de fond et les champs de saisie
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 60,
    backgroundColor: 'pink',
    borderRadius: 30,
    marginBottom: 20, // Espacement entre les champs de saisie
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, // Espacement entre les champs de saisie et les boutons
  },
  button: {
    backgroundColor: '#FF1493',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    width: 120, // Largeur du bouton
    height: 40, // Hauteur du bouton
    
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: '#FF1493',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 100, // Largeur du bouton
    height: 40, // Hauteur du bouton
  },
  signupButtonText: {
    color: 'white',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 50,
    
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 13,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 19,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
