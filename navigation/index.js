import React  from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompteScreen from '../screens/Patient/CompteScreen';
import CreatecompteScreen from '../screens/Auth/CreatecompteScreen';

import AthentifScreen from '../screens/Auth/AthentifScreen';

import RdvScreen from '../screens/Patient/RdvScreen';
import PagerdvScreen from '../screens/Patient/PagerdvScreen';
import GpsScreen from '../screens/Patient/GpsScreen';
import SplashScreen from '../screens/Patient/SplashScreen';
import HomeScreen from '../screens/Patient/HomeScreen';
import ConsulterScreen from '../screens/Patient/ConsulterScreen';
import MedecinScreen from '../screens/Patient/MedecinScreen';
import ChatScreen from '../screens/Patient/ChatScreen';
import NotificationScreen from '../screens/Patient/NotificationScreen';
import SuivremedScreen from '../screens/Patient/SuivremedScreen';
import ConseilsScreen from '../screens/Patient/ConseilsScreen';
import AlimentationScreen from '../screens/Patient/AlimentationScreen';
import ActiviteScreen from '../screens/Patient/ActiviteScreen';
import ConsommationScreen from '../screens/Patient/ConsommationScreen';
import MedicaleScreen from '../screens/Patient/MedicaleScreen';
import ExpositionScreen from '../screens/Patient/ExpositionScreen';
import ConsultationenligneScreen from '../screens/Patient/ConsultationenligneScreen';
import AvisScreen from '../screens/Patient/AvisScreen';
import MessageScreen from '../screens/Patient/MessageScreen';
import Header from '../screens/Patient/Header';
import Footer from '../screens/Patient/Footer';
import DeconnecterScreen from '../screens/Patient/DeconnecterScreen';
import DossierScreen from '../screens/Patient/DossierScreen';
import ProfileScreen from '../screens/Patient/ProfileScreen';

import MedHomeScreen from '../screens/Doctor/MedHomeScreen';
import MedConsultScreen from '../screens/Doctor/MedConsultScreen';
import RdvMedScreen from '../screens/Doctor/RdvMedScreen';
import PagerdvmScreen from '../screens/Doctor/PagerdvmScreen';
import DossierMedScreen from '../screens/Doctor/DossierMedScreen';
import MedDossierScreen from '../screens/Doctor/MedDossierScreen';
import MedProfilScreen from '../screens/Doctor/MedProfilScreen';
import SuiviMedScreen from '../screens/Doctor/SuiviMedScreen';
import AdminhomeScreen from '../screens/Admin/AdminhomeScreen';
import GererCompteScreen from '../screens/Admin/GererCompteScreen';
import ComptesScreen from '../screens/Admin/ComptesScreen';
import GererspecScreen from '../screens/Admin/GererspecScreen';
import AjoutconseilsScreen from '../screens/Admin/AjoutconceilsScreen';
import ProfilPatscreen from '../screens/Admin/ProfilPatScreen';
import ProfilMedScreen from '../screens/Admin/ProfilMedScreen';
import ValidationScreen from '../screens/Admin/ValidationScreen';
import ModifScreen from '../screens/Admin/ModifScreen';
import ArchiveScreen from '../screens/Admin/ArchiveScreen';
import ParamScreen from '../screens/Admin/ParamScreen';
import ProfiladminScreen from '../screens/Admin/ProfiladminScreen';
import DocparamScreen from '../screens/Doctor/DocparamScreen';
import PatparamScreen from '../screens/Patient/PatparamScreen';
import ModifdossierScreen from '../screens/Patient/ModifdossierScreen';
import MedchatScreen from '../screens/Doctor/MedchatScreen';
import ProfileDetailScreen from '../screens/Doctor/ProfileDetailScreen';
import DispoScreen from '../screens/Doctor/DispoScreen';


const Stack = createStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}> 
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>

            <Stack.Screen name="CompteScreen" component={CompteScreen}/>
            <Stack.Screen name="AthentifScreen" component={AthentifScreen}/>
            <Stack.Screen name="CreatecompteScreen" component={CreatecompteScreen}/>
    
            <Stack.Screen name="PagerdvScreen" component={PagerdvScreen}/>
            <Stack.Screen name="RdvScreen" component={RdvScreen}/>
            <Stack.Screen name="GpsScreen" component={GpsScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="ConsulterScreen" component={ConsulterScreen}/>
            <Stack.Screen name="MedecinScreen" component={MedecinScreen}/>
            <Stack.Screen name="ChatScreen" component={ChatScreen}/>
            <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
            <Stack.Screen name="SuivremedScreen" component={SuivremedScreen}/>
            <Stack.Screen name="ConseilsScreen" component={ConseilsScreen}/>
            <Stack.Screen name="AlimentationScreen" component={AlimentationScreen}/>
            <Stack.Screen name="ActiviteScreen" component={ActiviteScreen}/>
            <Stack.Screen name="ConsommationScreen" component={ConsommationScreen}/>
            <Stack.Screen name="MedicaleScreen" component={MedicaleScreen}/>
            <Stack.Screen name="ExpositionScreen" component={ExpositionScreen}/>
            <Stack.Screen name="ConsultationenligneScreen" component={ConsultationenligneScreen}/>
            <Stack.Screen name="AvisScreen" component={AvisScreen}/>
            <Stack.Screen name="MessageScreen" component={MessageScreen}/>
            <Stack.Screen name="DeconnecterScreen" component={DeconnecterScreen}/>
            <Stack.Screen name="Header" component={Header}/>
            <Stack.Screen name="Footer" component={Footer}/>
            <Stack.Screen name="DossierScreen" component={DossierScreen}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>

            <Stack.Screen name="MedHomeScreen" component={MedHomeScreen}/>
            <Stack.Screen name="MedConsultScreen" component={MedConsultScreen}/>
            <Stack.Screen name="RdvMedScreen" component={RdvMedScreen}/>
            <Stack.Screen name="PagerdvmScreen" component={PagerdvmScreen}/>
            <Stack.Screen name="DossierMedScreen" component={DossierMedScreen}/>
            <Stack.Screen name="MedDossierScreen" component={MedDossierScreen}/>
            <Stack.Screen name="MedProfilScreen" component={MedProfilScreen}/>
            <Stack.Screen name="SuiviMedScreen" component={SuiviMedScreen}/>

            <Stack.Screen name="AdminhomeScreen" component={AdminhomeScreen}/>
            <Stack.Screen name="GererCompteScreen" component={GererCompteScreen}/>
            <Stack.Screen name="ComptesScreen" component={ComptesScreen}/>
            <Stack.Screen name="GererspecScreen" component={GererspecScreen}/>
            <Stack.Screen name="AjoutconseilsScreen" component={AjoutconseilsScreen}/>
            <Stack.Screen name="ProfilMedScreen" component={ProfilMedScreen}/>
            <Stack.Screen name="ProfilPatScreen" component={ProfilPatscreen}/>
            <Stack.Screen name="ValidationScreen" component={ValidationScreen}/>
            <Stack.Screen name="ModifScreen" component={ModifScreen}/>
            <Stack.Screen name="ArchiveScreen" component={ArchiveScreen}/>
            <Stack.Screen name="ParamScreen" component={ParamScreen}/>
            <Stack.Screen name="ProfiladminScreen" component={ProfiladminScreen}/>
            <Stack.Screen name="DocparamScreen" component={DocparamScreen}/>
            <Stack.Screen name="PatparamScreen" component={PatparamScreen}/>
            <Stack.Screen name="ModifdossierScreen" component={ModifdossierScreen}/>
            <Stack.Screen name="MedchatScreen" component={MedchatScreen}/>
            <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen}/>
            <Stack.Screen name="DispoScreen" component={DispoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default Navigation;