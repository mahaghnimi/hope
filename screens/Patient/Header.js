import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput,FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen');
  };

  const handleMenuPress = () => {
    toggleMenu();
  };

  const menuOptions = [
    { id: '1', name: 'Profil', icon: 'person' },
    { id: '2', name: 'Dossier Médical', icon: 'medical' },
    { id: '3', name: 'Paramètres', icon: 'settings' },
    { id: '4', name: 'Déconnexion', icon: 'log-out' },
  ];

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
              <TouchableOpacity style={styles.menuItem} onPress={() => console.log(item.name)}>
                <Ionicons name={item.icon} size={24} color="#FF1493" style={styles.menuItemIcon} />
                <Text style={styles.menuItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#FFC0CB',
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
});
