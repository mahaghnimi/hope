import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Erreur', 'L\'adresse e-mail est invalide');
      return;
    }

    if (!isValidNumericCode(password)) {
      Alert.alert('Erreur', 'Le code doit être numérique');
      return;
    }

    // Logique de connexion ici
  };

  const goBack = () => {
    navigation.goBack();
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidNumericCode = (code) => {
    return /^\d+$/.test(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Code"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
            <Text style={styles.signupButtonText}>Confirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={goBack}>
            <Text style={styles.signupButtonText}>Retourner</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB', // Fond rose
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
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
    justifyContent: 'space-between',
    width: '100%', // Utilisation de la largeur totale disponible
  },
  signupButton: {
    backgroundColor: '#FF1493',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '45%', // Réglage de la largeur des boutons
    height: 40, // Hauteur du bouton
    marginTop: 20, // Espacement entre le bouton de confirmation et le texte en bas de la page
  },
  signupButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
