import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function Profilescreen({ navigation }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');

  // Fonction pour insérer le dossier médical
  const handleInsererDossierMedical = () => {
    // Implémentez la logique ici
  };

  return (
    <View style={styles.container}>
      <Header /> 
      <ImageBackground source={require('../../assets/images/profil.jpeg')} style={[styles.content, { opacity: 0.9 }]}>
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
      </ImageBackground>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={handleInsererDossierMedical}>
          <Text onPress={() => navigation.navigate('DossierScreen')} style={styles.buttonText}>Insérer votre dossier médical</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 192, 203, 0.5)', // Light Pink
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#FF69B4', // Rose
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop:0,
  },
  secondButton: {
    marginLeft: 10, // Ajustez la valeur selon l'espace souhaité entre les boutons
  },
  buttonText: {
    color: '#FFF', // Texte en blanc
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:30,
  },
});
