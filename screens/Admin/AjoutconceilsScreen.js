import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function AjoutconseilsScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [screen, setScreen] = useState('');

  const handleAddAdvice = () => {
    // Ici, vous pouvez effectuer des actions telles que l'envoi de données au backend ou leur stockage localement
    console.log('Title:', title);
    console.log('Image URL:', imageURL);
    console.log('Screen:', screen);
    // En option, vous pouvez naviguer vers l'écran précédent après l'ajout du conseil
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add Advice</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          onChangeText={text => setImageURL(text)}
          value={imageURL}
        />
        <TextInput
          style={styles.input}
          placeholder="Screen"
          onChangeText={text => setScreen(text)}
          value={screen}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddAdvice}>
          <Text style={styles.buttonText}>Add Advice</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED7E2', // Rose clair
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF1493', // Rose foncé
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FF69B4', // Rose clair
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#FF1493', // Rose foncé
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

