import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Header';
import Footer from './Footer';

export default function ProfileDetailScreen({ route, navigation }) {
  const [profileData, setProfileData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    specialite: '',
    competences: '',
    educationHistory: '',
    numTelephone: '',
  });

  useEffect(() => {
    if (route.params) {
      setProfileData(route.params);
    }
  }, [route.params]);

  const handleEdit = () => {
    navigation.navigate('EditProfileScreen', { profileData });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Détails du Profil</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Nom:</Text>
          <Text style={styles.value}>{profileData.nom}</Text>
          <Text style={styles.label}>Prénom:</Text>
          <Text style={styles.value}>{profileData.prenom}</Text>
          <Text style={styles.label}>Date de Naissance:</Text>
          <Text style={styles.value}>{profileData.dateNaissance}</Text>
          <Text style={styles.label}>Spécialité:</Text>
          <Text style={styles.value}>{profileData.specialite}</Text>
          <Text style={styles.label}>Compétences:</Text>
          <Text style={styles.value}>{profileData.competences}</Text>
          <Text style={styles.label}>Historique d'éducation:</Text>
          <Text style={styles.value}>{profileData.educationHistory}</Text>
          <Text style={styles.label}>Numéro de Téléphone:</Text>
          <Text style={styles.value}>{profileData.numTelephone}</Text>
        </View>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Modifier</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493',
  },
  detailsContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FF1493',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#FF1493',
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
