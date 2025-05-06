import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { account } from '../scripts/script'; // Підключення Appwrite API

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // Логін за email + password
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      await account.createEmailPasswordSession(email, password); 
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('HelpCenter');
            console.log("hello");
    } catch (error) {
            console.log(error);
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  const handleAnonymousLogin = async () => {
    try {
      await account.createAnonymousSession();
      Alert.alert('Success', 'Logged in anonymously.');
      navigation.navigate('HelpCenter'); 

    } catch (error) {

      Alert.alert('Error', 'Failed to log in anonymously.');
    }
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };
 
 const logout = async () => {
    setIsLoading(true); // Show a loading state
    try {
        await account.deleteSession("current"); // Log out from the current session
        Alert.alert('Success', 'Logged out successfully!');
        navigation.replace("Login"); // Redirect to login page
    } catch (error) {
        console.error('Logout failed:', error.message); // Log the error message
        Alert.alert('Error', error.message);
    } finally {
        setIsLoading(false); // Hide the loading state regardless of success or failure
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Platform</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log in" onPress={handleLogin} />
      <Button title="Try anonymously" onPress={handleAnonymousLogin} />
      <Button title="No account? Register" onPress={goToRegister} />
      <Button title="Logout" onPress={logout} disabled={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#0E0B0B',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default LoginScreen;
