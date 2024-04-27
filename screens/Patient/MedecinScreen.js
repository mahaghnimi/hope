import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import Header from './Header'; 
import Footer from './Footer'; 

const windowHeight = Dimensions.get('window').height;

export default function MedecinScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = DATA.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Item
        name={item.name}
        specialty={item.specialty}
        photo={item.photo}
      />
    </TouchableOpacity>
  );

  const handlePress = (medecin) => {
    navigation.navigate('DetailsScreen', { medecin });
  };

  return (
    <View style={styles.container}>
      <Header/>
      <SearchHeader handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredData.slice(0, 7)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        style={styles.flatList}
      />
      <Footer /> 
    </View>
  );
};

const Item = ({ name, specialty, photo }) => (
  <View style={styles.item}>
    <Image source={photo} style={styles.photo} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
    </View>
  </View>
);

const SearchHeader = ({ handleSearch, searchQuery }) => ( // Rename Header to SearchHeader
  <View style={styles.header}>
    <TextInput
      style={styles.input}
      placeholder="Rechercher un médecin..."
      placeholderTextColor="#FFFFFF"
      value={searchQuery}
      onChangeText={handleSearch}
    />
  </View>
);

const DATA = [
  { id: '1', name: 'Dr. Jean Dupont', specialty: 'Gynécologue', photo: require('../../assets/images/hh.jpg') },
  { id: '2', name: 'Dr. Marie Durand', specialty: 'Gynécologue', photo: require('../../assets/images/ff.jpg') },
  { id: '3', name: 'Dr. Paul Martin', specialty: 'Gynécologue', photo: require('../../assets/images/hh.jpg') },
  { id: '4', name: 'Dr. Anne Leclerc', specialty: 'carcionologue', photo: require('../../assets/images/ff.jpg')},
 
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    height: windowHeight, // Set container height to 100% of screen height
  },
  header: {
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    padding: 20,
    borderBottomWidth: 0,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#880088',
    borderRadius: 28,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 3,
    marginVertical: 15,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 25,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#880088',
  },
  specialty: {
    fontSize: 16,
    color: 'white',
  },
  flatList: {
    height: '80%', // Set a fixed height
  },
});
