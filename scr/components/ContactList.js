import React from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import { contacts } from "./data";

const ContactList = () => {
  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(
        "Не вдалося відкрити посилання. Тикніть Лесю: " + url);
    }
  };

  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => openLink(contact.url)}>
          <Ionicons name={contact.icon} size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>{contact.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
    
  );
};

export default ContactList;
