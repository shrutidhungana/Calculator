import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import CalculatorScreen from './src/screens/CalculatorScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Header title={"Let's Calculate"} />
      <CalculatorScreen />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 2,
   
  },
});