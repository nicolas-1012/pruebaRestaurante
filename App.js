import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloTexto}>Menu</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F1F0EB",
    alignItems: 'center',
  justifyContent: "flex-start",
  },

  tituloTexto: {
    fontWeight: 700,
    fontSize: 40,
  }
});
