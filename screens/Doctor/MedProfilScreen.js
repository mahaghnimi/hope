import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Header from './Header'; 
import Footer from './Footer';

export default function MedProfilScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [competences, setCompetences] = useState('');
  const [educationHistory, setEducationHistory] = useState('');
  const [numTelephone, setNumTelephone] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleEnregistrer = async () => {
    try {
      await addDoc(collection(db, 'medical_professionals'), {
        nom,
        prenom,
        dateNaissance,
        specialite,
        competences,
        educationHistory,
        numTelephone,
        imageUri: image,
        createdAt: serverTimestamp()
      });

      console.log('Profil enregistré avec succès');
      Alert.alert('Profil enregistré avec succès!');
      
      navigation.navigate('ProfileDetailScreen', {
        nom,
        prenom,
        dateNaissance,
        specialite,
        competences,
        educationHistory,
        numTelephone
      });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du profil:', error);
      Alert.alert('Erreur lors de l\'enregistrement du profil. Veuillez réessayer plus tard.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : <Image source={require('../../assets/images/profmed.png')} style={styles.backgroundImage} />}
            <Text style={styles.chooseImageText}>{image ? 'Changer l\'image' : 'Choisir une image'}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Nom"
            value={nom}
            onChangeText={setNom}
          />
          <TextInput
            style={styles.input}
            placeholder="Prénom"
            value={prenom}
            onChangeText={setPrenom}
          />
          <TextInput
            style={styles.input}
            placeholder="Date de naissance"
            value={dateNaissance}
            onChangeText={setDateNaissance}
          />
          <TextInput
            style={styles.input}
            placeholder="Numéro de téléphone"
            value={numTelephone}
            onChangeText={setNumTelephone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Spécialité"
            value={specialite}
            onChangeText={setSpecialite}
          />
          <TextInput
            style={styles.input}
            placeholder="Compétences"
            value={competences}
            onChangeText={setCompetences}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Historique d'éducation"
            value={educationHistory}
            onChangeText={setEducationHistory}
            multiline
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Enregistrer" onPress={handleEnregistrer} color="#FF1493" /> 
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFC0CB',
    borderColor: '#FF1493',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imagePicker: {
    marginBottom: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 100,
  },
  chooseImageText: {
    color: '#FF1493',
    fontSize: 16,
    position: 'absolute',
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
