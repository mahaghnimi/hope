import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function PatparamScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Erreur', 'Le nouveau mot de passe et la confirmation du nouveau mot de passe ne correspondent pas');
      return;
    }

    // Perform API request to change password with currentPassword and newPassword

    // For demonstration purposes, just logging the values
    console.log('Mot de passe actuel:', currentPassword);
    console.log('Nouveau Mot de Passe:', newPassword);
    console.log('Confirmer Nouveau Mot de Passe:', confirmNewPassword);

    // Clear input fields
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');

    // Show success message
    Alert.alert('Succès', 'Le mot de passe a été réinitialisé avec succès');
  };

  return (
    <View style={styles.container}>
       <Header />
      <Text style={styles.title}>Changer votre Mot de passe</Text>
  
      <View style={styles.content}>
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
