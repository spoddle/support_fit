import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ComplaintForm from '../components/ComplaintForm';
import ComplaintList from '../components/ComplaintList';

const ComplaintScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Дозволяю жалітися скільки потрібно</Text>
      <ComplaintForm />
      <ComplaintList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  textAlign: 'center',
  },
});

export default ComplaintScreen;