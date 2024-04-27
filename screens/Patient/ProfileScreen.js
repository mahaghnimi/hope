import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Platform } from 'react-native';

import Header from './Header'; // Importez le composant Header
import Footer from './Footer'; // Importez le composant Footer

export default function Profilescreen({ navigation }) {  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');


  // Fonction pour ajouter le profil avec les données remplies
  const handleAjouter = () => {
    // Implémentez la logique ici
  };

  // Fonction pour insérer le dossier médical
  const handleInsererDossierMedical = () => {
    // Implémentez la logique ici
  };

  return (
    <ImageBackground source={require('../../assets/images/profil.jpeg')} style={[styles.container, { opacity: 0.9 }]}>
      <Header /> 
      <View style={styles.imageContainer}>

      
      </View>
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
        <View style={styles.form}>
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
        {/* Ajoutez les autres champs du formulaire de la même manière */}
      </View>
      <View style={styles.footer}>
      
        <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={handleInsererDossierMedical}>
          <Text onPress={() => navigation.navigate('DossierScreen')} style={styles.buttonText}>Insérer votre dossier médical</Text>
        </TouchableOpacity>
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addPhotoButton: {
    backgroundColor: '#FF69B4', // Rose
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF', // Texte en blanc
    fontSize: 16,
    fontWeight: 'bold',
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
    color: '#FFFFFF', // Couleur du texte sur l'image
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FF69B4', // Rose
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  secondButton: {
    marginLeft: 10, // Ajustez la valeur selon l'espace souhaité entre les boutons
  },
});
