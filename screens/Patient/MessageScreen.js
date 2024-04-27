import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import Header from './Header';  // Importez le composant Header
import Footer from './Footer';

export default function MessageScreen({ route }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [image, setImage] = useState(null);

  const { receiverName } = route.params;

  useEffect(() => {
    // Fetch messages from backend or initialize an empty array
    // For demo purpose, initializing with sample messages
    setMessages([
      { id: 1, sender: "You", content: "Hello!", type: "text" },
      { id: 2, sender: receiverName, content: "Hi there!", type: "text" },
    ]);
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, sender: "You", content: inputMessage, type: "text" }
      ]);
      setInputMessage('');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, sender: "You", content: result.uri, type: "image" }
      ]);
    }
  };

  const shareLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    setMessages(prevMessages => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "You", content: { latitude, longitude }, type: "location" }
    ]);
  };

  return (
    <View style={styles.container}>
      <Header /> 
      <View style={styles.header}>
        <Text style={styles.receiverName}>{receiverName}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map(message => (
          <View key={message.id} style={message.sender === "You" ? styles.sentMessage : styles.receivedMessage}>
            {message.type === "text" && <Text>{message.content}</Text>}
            {message.type === "image" && <Image source={{ uri: message.content }} style={styles.image} />}
            {message.type === "location" && (
              <Text>Latitude: {message.content.latitude}, Longitude: {message.content.longitude}</Text>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type your message here..."
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Ionicons name="image" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={shareLocation}>
          <Ionicons name="location" size={24} color="#FFF" />
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
  header: {
    backgroundColor: '#FF1493',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  receiverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  messagesContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#FF1493',
    borderRadius: 20,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
