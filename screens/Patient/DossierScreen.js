import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button, StyleSheet, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import {  FIREBASE_AUTH } from '../../firebaseConfig';
import Header from './Header';
import Footer from './Footer';

export default function DossierScreen({ navigation }) {
  const auth = FIREBASE_AUTH
  const [selectedImage, setSelectedImage] = useState(null);
  const [symptoms, setSymptoms] = useState([
    { id: 1, name: 'Une bosse dans votre sein ou sous votre bras pourrait être remarquée.', selected: false },
    { id: 2, name: 'Une douleur persistante dans votre sein pourrait être remarquée.', selected: false },
    { id: 3, name: 'Un gonflement ou une rougeur dans votre sein pourrait aussi être remarqué.', selected: false },
    { id: 4, name: 'Un changement dans la taille ou la forme de votre sein pourrait être noté.', selected: false },
    { id: 5, name: 'Un écoulement du mamelon autre que le lait maternel pourrait également être remarqué.', selected: false },
    { id: 6, name: 'Une perte de poids inexpliquée pourrait aussi être remarquée.', selected: false },
  ]);
  const [patientName, setPatientName] = useState('');
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        if (auth) {
          const user = auth.currentUser;
          if (user) {
            setPatientName(user.email);
          }
        }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };
  
    fetchUserEmail();
  }, []);
  

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const saveImage = async () => {
    try {
      if (selectedImage) {
        const docRef = await addDoc(collection(db, 'images'), {
          imageUri: selectedImage,
          createdAt: serverTimestamp()
        });
        console.log('Image saved successfully:', docRef.id);

        await saveSymptoms();

        alert('Image enregistrée avec succès !');
      } else {
        alert('Aucune image sélectionnée.');
      }
    } catch (error) {
      console.error('Error saving image:', error);
      alert('Erreur lors de l\'enregistrement de l\'image. Veuillez réessayer plus tard.');
    }
  };

  const toggleSymptomSelection = (id) => {
    const updatedSymptoms = symptoms.map(symptom => {
      if (symptom.id === id) {
        return { ...symptom, selected: !symptom.selected };
      } else {
        return symptom;
      }
    });
    setSymptoms(updatedSymptoms);
  };

  const saveSymptoms = async () => {
    try {
      const selectedSymptoms = symptoms.filter(symptom => symptom.selected);
      const docRef = await addDoc(collection(db, 'symptoms'), {
        patientName: patientName,
        email: auth.currentUser.email,
        symptoms: selectedSymptoms.map(symptom => symptom.name),
        createdAt: serverTimestamp()
      });
      console.log('Symptoms saved successfully:', docRef.id);
      alert('Symptômes enregistrés avec succès !');
    } catch (error) {
      console.error('Error saving symptoms:', error);
      alert('Erreur lors de l\'enregistrement des symptômes. Veuillez réessayer plus tard.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.headerText}>Bienvenue Madame {patientName}</Text>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <ImageBackground source={require('../../assets/images/galerie.png')} style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Insérer une image</Text>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.analysisText}>Analysons maintenant vos symptômes</Text>
      <Text style={styles.questionText}>Avez-vous remarqué ces symptômes ?</Text>
      <View style={styles.symptomsContainer}>
        {symptoms.map(symptom => (
          <TouchableOpacity
            key={symptom.id}
            style={[styles.horizontalCard, { backgroundColor: symptom.selected ? '#FFC0CB' : '#DDDDDD' }]}
            onPress={() => toggleSymptomSelection(symptom.id)}
          >
            <Text style={styles.cardText}>{symptom.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ajouter" onPress={saveSymptoms} color='#FF1493' />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    color: '#FF69B4',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  imageButton: {
    width: 200,
    height: 150,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  analysisText: {
    fontSize: 19,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10,
    color: '#FF69B4',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    color: '#FF1493',
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  horizontalCard: {
    width: '85%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#FFC0CB',
    elevation: 8,
    shadowColor: '#C71585',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 15,
    color: '#C71585',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
