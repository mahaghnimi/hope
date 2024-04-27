import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function ProfiladminScreen({ navigation }) {
  const [nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [rôle, setRôle] = useState('');

  const handleEnregistrerProfil = () => {
    // La logique pour enregistrer le profil serait placée ici
    console.log('Enregistrement du profil...');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titre}>Profil de l'administrateur</Text>
      <View style={styles.formulaire}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={nom}
          onChangeText={setNom}
        />
        <TextInput
          style={styles.input}
          placeholder="Prenom"
          value={Prenom}
          onChangeText={setPrenom}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Rôle"
          value={rôle}
          onChangeText={setRôle}
        />
      </View>
      <TouchableOpacity style={styles.boutonEnregistrer} onPress={handleEnregistrerProfil}>
        <Text style={styles.texteBouton}>Enregistrer le profil</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#FF1493',
    textAlign: 'center',
  },
  formulaire: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF1493',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  boutonEnregistrer: {
    backgroundColor: '#FF1493',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  texteBouton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
