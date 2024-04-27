import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importer les icônes AntDesign
import { useNavigation } from '@react-navigation/native';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; 

export default function AvisScreen() {
  // État local pour gérer les réponses aux questions
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '', // Nouvelle question
  });

  // État local pour le commentaire
  const [comment, setComment] = useState('');

  // Fonction pour mettre à jour la réponse à une question
  const updateAnswer = (question, answer) => {
    setAnswers(prevState => ({
      ...prevState,
      [question]: answer,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <View style={styles.container}>
    
        <Text style={styles.title}>Donnez-nous votre avis :</Text>

        <View style={styles.card}>
          <Text style={styles.questionText}>Question 1: Aimez-vous notre application ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question1', 'Oui')}>
              <AntDesign name={answers.question1 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question1', 'Non')}>
              <AntDesign name={answers.question1 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

     
        <View style={styles.card}>
          <Text style={styles.questionText}>Question 2: Êtes-vous satisfait de la facilité d'utilisation ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question2', 'Oui')}>
              <AntDesign name={answers.question2 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question2', 'Non')}>
              <AntDesign name={answers.question2 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

  
        <View style={styles.card}>
          <Text style={styles.questionText}>Question 3: Avez-vous des suggestions d'amélioration ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question3', 'Oui')}>
              <AntDesign name={answers.question3 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question3', 'Non')}>
              <AntDesign name={answers.question3 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

   
        <View style={styles.card}>
          <Text style={styles.questionText}>Question 4: Avez-vous trouvé l'application utile ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question4', 'Oui')}>
              <AntDesign name={answers.question4 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question4', 'Non')}>
              <AntDesign name={answers.question4 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

     
        <Text style={styles.answersText}>Réponses sélectionnées :</Text>
        <View style={styles.answersContainer}>
          <Text>Question 1: {answers.question1}</Text>
          <Text>Question 2: {answers.question2}</Text>
          <Text>Question 3: {answers.question3}</Text>
          <Text>Question 4: {answers.question4}</Text>
        </View>

      
        <View style={styles.commentContainer}>
          <Text style={styles.commentTitle}>Ajouter un commentaire :</Text>
          <TextInput
            style={styles.commentInput}
            onChangeText={text => setComment(text)}
            value={comment}
            placeholder="Ajoutez un commentaire..."
            multiline
          />
        </View>

     
        <View style={styles.addButtonContainer}>
        <Button title="Ajouter" onPress={() => console.log("Ajouter")} color="#FF1493" />
        </View>
        

      </View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  answersText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  commentContainer: {
    marginBottom: 20,
    alignItems: 'center', // Center the comment container
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    
  },
  commentInput: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff', // White background
    borderColor: '#ccc',
    borderWidth:    1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  addButtonContainer: {
    marginBottom: 20,
    alignItems: 'center',
    
  },
});

