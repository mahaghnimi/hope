import React, { useState } from 'react';
import { Button,StyleSheet, View } from 'react-native';
  import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './navigation';

const Stack = createStackNavigator();
export default function App() {
  return (
   <Navigation/>
  );
  
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#FFC0CB',
  },
});
