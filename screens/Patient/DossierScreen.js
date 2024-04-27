import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button, StyleSheet, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from './Header';
import Footer from './Footer';

export default function DossierScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [symptoms, setSymptoms] = useState([
    { id: 1, name: 'Avez-vous remarqué une bosse dans votre sein ou sous votre bras ?', selected: false },
    { id: 2, name: 'Ressentez-vous une douleur persistante dans votre sein ?', selected: false },
    { id: 3, name: 'Éprouvez-vous un gonflement, une rougeur dans votre sein ?', selected: false },
    { id: 4, name: 'Avez-vous remarqué un changement dans la taille ou la forme de votre sein ?', selected: false },
    { id: 5, name: 'Avez-vous observé un écoulement du mamelon autre que le lait maternel ?', selected: false },
    { id: 6, name: 'Avez-vous eu une perte de poids inexpliquée ?', selected: false },
  ]);
  const patientId = '1';

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

  const saveImage = () => {
    if (selectedImage) {
      alert('Image enregistrée avec succès !');
    } else {
      alert('Aucune image sélectionnée.');
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Text style={styles.headerText}>Bienvenue Madame (ID Patient: {patientId})</Text>
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
        <Button title="Ajouter" onPress={() => {}} color='#FF1493' />
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
    paddingBottom: 100, // Add paddingBottom to create space for the footer
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
    marginBottom: 20, // Increase marginBottom for spacing
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
    marginVertical: 10, // Use marginVertical for top and bottom margin
    backgroundColor: '#FFC0CB',
    elevation: 8, // Add elevation for shadow
    shadowColor: '#C71585', // Set shadow color same as card text color
    shadowOpacity: 0.5, // Adjust opacity as needed
    shadowRadius: 5, // Adjust shadow radius as needed
    shadowOffset: { width: 0, height: 2 }, // Adjust shadow offset as needed
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
    marginBottom: 20, // Increase marginBottom for spacing
    width: '100%', // Set width to 100% to center the button
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
