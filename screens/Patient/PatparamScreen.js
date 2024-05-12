import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../../firebaseConfig'; // Import Firebase Authentication
import { db, FIREBASE_AUTH } from '../../firebaseConfig';
import Header from './Header';
import Footer from './Footer';

export default function PatparamScreen() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [displayName, setDisplayName] = useState(''); // State to hold user's display name
  const auth = FIREBASE_AUTH;
  
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
      setDisplayName(user.displayName); // Set display name
    }
  }, []);

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Erreur', 'Le nouveau mot de passe et la confirmation du nouveau mot de passe ne correspondent pas');
      return;
    }

    try {
      const user = auth.currentUser;
      // Ensure the user is signed in with email and password provider
      if (user && user.providerData.some(provider => provider.providerId === 'password')) {
        await user.updatePassword(newPassword);
        Alert.alert('Succès', 'Le mot de passe a été réinitialisé avec succès');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
      } else {
        Alert.alert('Erreur', 'Votre compte n\'est pas associé à un fournisseur de connexion par e-mail et mot de passe.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du mot de passe :', error.message);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de la mise à jour du mot de passe. Veuillez réessayer.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Changer votre Mot de passe</Text>

      <View style={styles.content}>
        <Text style={styles.displayName}>{displayName}</Text> 
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          value={email}
          editable={false} // Make it non-editable as it's pre-filled
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe actuel"
          secureTextEntry={true}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Nouveau Mot de Passe"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmer Nouveau Mot de Passe"
          secureTextEntry={true}
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Modifier le mot de passe</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
    color: '#FF1493',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF1493',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    backgroundColor: '#FF1493',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
