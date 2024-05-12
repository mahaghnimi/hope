import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import Header from './Header';
import Footer from './Footer';
import { db } from '../../firebaseConfig';

export default function MedDossierScreen() {
  const [patientName, setPatientName] = useState('...');
  const [medicalRecord, setMedicalRecord] = useState('');
  const [newInformation, setNewInformation] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleModifyClick = async () => {
    try {
      if (!medicalRecord && !selectedImage) {
        alert('Veuillez ajouter au moins une information médicale ou une image avant de modifier.');
        return;
      }

      const dossierData = {
        patientName,
        medicalRecord,
        newInformation,
        imageUri: selectedImage,
        createdAt: serverTimestamp()
      };

      const dossierRef = doc(db, 'dossiers', patientName);
      await setDoc(dossierRef, dossierData);

      alert('Dossier médical modifié avec succès !');
    } catch (error) {
      console.error('Error modifying dossier:', error);
      alert('Une erreur s\'est produite lors de la modification du dossier. Veuillez réessayer plus tard.');
    }
  };

  const handleAddInformation = () => {
    setMedicalRecord(prevMedicalRecord => prevMedicalRecord + '\n' + newInformation);
    setNewInformation('');
  };

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.headerText}>Dossier médical pour {patientName}</Text>
        <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
          <Text style={styles.buttonText}>Ajouter une image</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} resizeMode="cover" />
        )}
        <Text style={styles.medicalRecordText}>{medicalRecord}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nouvelle information..."
          value={newInformation}
          onChangeText={setNewInformation}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddInformation}>
          <Text style={styles.buttonText}>Ajouter Information</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleModifyClick}>
          <Text style={styles.buttonText}>Modifier</Text>
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
  main: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: '#880088',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  medicalRecordText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF1493',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  imageButton: {
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
  },
});
