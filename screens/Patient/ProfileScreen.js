import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Header from './Header';
import Footer from './Footer';

export default function Profilescreen({ navigation }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');

  // Fonction pour ajouter le profil avec les données remplies
  const handleAjouter = async () => {
    try {
      // Save the patient's profile data to Firebase
      const docRef = await addDoc(collection(db, 'profiles'), {
        nom,
        prenom,
        dateNaissance,
        email,
        adresse,
        numeroTelephone,
        createdAt: serverTimestamp()
      });

      console.log('Profil ajouté avec succès:', docRef.id);
      Alert.alert('Profil ajouté avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du profil:', error);
      Alert.alert('Erreur lors de l\'ajout du profil. Veuillez réessayer plus tard.');
    }
  };

  // Fonction pour insérer le dossier médical
  const handleInsererDossierMedical = () => {
    navigation.navigate('DossierScreen');
  };

  return (
    <ImageBackground source={require('../../assets/images/profil.jpeg')} style={[styles.container, { opacity: 0.9 }]}>
      <Header />
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.formField}>
            <Text style={styles.label}>Nom:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNom}
              value={nom}
              placeholder="Entrez votre nom"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Prénom:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPrenom}
              value={prenom}
              placeholder="Entrez votre prénom"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Date de Naissance:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDateNaissance}
              value={dateNaissance}
              placeholder="Entrez votre date de naissance"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Entrez votre adresse email"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Adresse:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setAdresse}
              value={adresse}
              placeholder="Entrez votre adresse"
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.label}>Numéro de Téléphone:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNumeroTelephone}
              value={numeroTelephone}
              placeholder="Entrez votre numéro de téléphone"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleAjouter}>
            <Text style={styles.buttonText}>Ajouter le profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleInsererDossierMedical}>
            <Text style={styles.buttonText}>Insérer votre dossier médical</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // Specify the background image path here
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  formField: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF', // Text color on the image
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FF69B4', // Pink
    paddingVertical: 12,
    paddingHorizontal: 9,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#FFF', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
