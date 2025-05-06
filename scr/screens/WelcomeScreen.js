import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Animated, Easing, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: loading ? 1 : 0,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [loading, fadeAnim]);

  const goToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Login');
      setLoading(false);
    }, 1000);
  };

  const goToComplaintScreen = () => {
    navigation.navigate('ComplaintScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Support</Text>

      <Animated.View style={[styles.loaderContainer, { opacity: fadeAnim }]}>
        <ActivityIndicator size="large" color="#0E0B0B" />
      </Animated.View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonSpacing]}
        onPress={goToLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Loading...' : 'Get Started'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={goToComplaintScreen} 
      >
        <Text style={styles.secondaryButtonText}>тиць поскаржитися</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0E0B0B",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonSpacing: {
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  secondaryButton: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    
  },
  secondaryButtonText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 15,
  },
});

export default WelcomeScreen;
