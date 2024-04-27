import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Footer from './Footer';

const themeColor = '#FFC0CB';

const DossierMedical = ({ dossier, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.dossierCard}>
      <Text style={styles.dossierText}>{dossier.nomPatient}</Text>
    </View>
  </TouchableOpacity>
);

const DossiersMedicauxListe = ({ dossiersMedicaux, onPressDossier }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dossiersMedicaux}
        renderItem={({ item }) => (
          <DossierMedical
            dossier={item}
            onPress={() => onPressDossier(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  dossierCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF1493',
  },
  dossierText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    color: '#FF1493',
  },
});

const DossierMedScreen = () => {
  const [selectedDossier, setSelectedDossier] = useState(null);
  const navigation = useNavigation(); 

  const handleDossierPress = (dossier) => {
    setSelectedDossier(dossier);
    navigation.navigate('MedDossierScreen', { dossier });
  };

  const dossiersMedicaux = [
    { id: 1, nomPatient: 'Jean Dupont' },
    { id: 2, nomPatient: 'Marie Martin' },
    { id: 3, nomPatient: 'Pauline Durand' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <DossiersMedicauxListe
        dossiersMedicaux={dossiersMedicaux}
        onPressDossier={handleDossierPress}
      />
      {selectedDossier && (
        <View style={{ padding: 20 }}>
          <Text style={{ color: '#FF1493' }}>Dossier sélectionné : {selectedDossier.nomPatient}</Text>
        </View>
      )}
      <Footer />
    </View>
  );
};

export default DossierMedScreen;
