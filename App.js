import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Inter_400Regular, Inter_500Medium, useFonts, } from '@expo-google-fonts/inter';
import { Lexend_600SemiBold, Lexend_400Regular, } from '@expo-google-fonts/lexend';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

export default function App() {

  const [validedFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Lexend_400Regular,
    Lexend_600SemiBold
  });


  if (!validedFonts) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
