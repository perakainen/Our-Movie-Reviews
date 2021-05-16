import React from 'react'
import { StyleSheet, View } from 'react-native';
import MainView from './components/views/MainView'

export default function App() {
  return (
    <View style={styles.container}>
      <MainView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#9D2F11',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
