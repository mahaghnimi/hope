import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MedHomeScreen({ navigation }) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  console.log("doctor screen")

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  // Fonction pour naviguer vers la page ProfileScreen
  const handleMenuItemPress = (menuItem) => {
    if (menuItem === 'Profile') {
      navigation.navigate('MedProfilScreen');
    } else if (menuItem === 'Mon Profile') {
      navigation.navigate('ProfileDetailScreen');
    }
     else if (menuItem === 'Paramètres') {
      navigation.navigate('DocparamScreen');
    } else if (menuItem === 'Déconnexion') {
      // Show alert before logging out
      Alert.alert(
        'Déconnexion',
        'Êtes-vous sûr de vouloir vous déconnecter ?',
        [
          { text: 'Annuler', onPress: () => console.log('Annuler Déconnexion') },
          { text: 'Déconnexion', onPress: () => navigation.navigate('AthentifScreen') } 
        ]
      
      );
    }
  };

  const menuOptions = [
    { id: '1', name: 'Profile', icon: 'person' },
    { id: '2', name: 'Mon Profile', icon: 'person' },
    { id: '3', name: 'Paramètres', icon: 'settings' },
    { id: '4', name: 'Déconnexion', icon: 'log-out' },
  ];

  const Card = ({ onPress, text, imageSource }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={imageSource} style={styles.cardImage} />
        <Text style={[styles.cardText, { color: '#FF1493', textAlign: 'center', fontWeight: 'bold' }]}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const handleCardPress = () => {
    console.log("Card pressed!");
  };

  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen');
  };

  const handleMenuPress = () => {
    toggleMenu();
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/lang.png')} style={styles.logo} />
        <Text style={styles.appName}>Hope</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Rechercher..." />
          <Ionicons name="search" size={24} color="#FF1493" />
        </View>
        <TouchableOpacity style={styles.notificationIcon} onPress={handleNotificationPress}>
          <Ionicons name="notifications" size={24} color="#FF1493" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Ionicons name="menu" size={24} color="#FF1493" />
        </TouchableOpacity>
      </View>
      {isMenuVisible && (
        <View style={[styles.menuContainer, {zIndex: 1}]}>
          <FlatList
            data={menuOptions}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress(item.name)}>

                <Ionicons name={item.icon} size={24} color="#FF1493" style={styles.menuItemIcon} />
                
                <Text style={styles.menuItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>Comment pouvons-nous vous aider ?</Text>
        <View style={styles.cardContainer}>
          <Card onPress={() => navigation.navigate('PagerdvmScreen')} text="Gérer Rendez-Vous en ligne" imageSource={require('../../assets/images/rdv.jpeg')} />
          <Card onPress={() => navigation.navigate('DossierMedScreen')} text="Gérer Dossier Medicaux" imageSource={require('../../assets/images/consumed.jpg')} />
        </View>
        <View style={styles.cardContainer}>
          <Card onPress={() => navigation.navigate('MedConsultScreen')} text="Consultation en Ligne" imageSource={require('../../assets/images/consenligne.jpeg')} />
          <Card onPress={() => navigation.navigate('SuiviMedScreen')} text="Suivre Médicaments" imageSource={require('../../assets/images/suivimed.jpeg')} />
        </View>
        <View style={styles.cardContainer}>
          <Card onPress={() => navigation.navigate('ConseilsScreen')} text="Conseil médical" imageSource={require('../../assets/images/conseil.jpeg')} />
          <Card onPress={handleCardPress} text="IA" imageSource={require('../../assets/images/ia.png')} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={24} color="#FF1493" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('MedchatScreen')}>
          <Ionicons name="chatbubble" size={24} color="#FF1493" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('AvisScreen')}>
          <Ionicons name="star" size={24} color="#FF1493" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('GpsScreen')}>
          <Ionicons name="navigate" size={24} color="#FF1493" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#FFC0CB',
  },
  logo: {
    width: 50,
    height: 50,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF1493',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  menuButton: {
    marginLeft: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: 60, // Adjust this value as needed
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 60,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    marginTop: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#FFC0CB',
  },
  footerIcon: {
    alignItems: 'center',
  },
});
