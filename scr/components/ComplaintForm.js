import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addComplaint } from '../reducers/complaintReducer';

const ComplaintForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && description) {
      dispatch(addComplaint({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>От таке от:</Text>
      <TextInput
        style={styles.input}
        placeholder="Заголовок скарги"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Опис проблеми"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <Button title="Відправити скаргу" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ComplaintForm;
