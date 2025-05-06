import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import FAQSection from "../components/FAQSection"; 
import ContactList from "../components/ContactList"; 
import styles from "../styles/styles";

const HelpCenterScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("FAQ");

  return (
    <View style={styles.container}>
      <Header title="Help Center" onBack={() => navigation.goBack()} />

      {}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setActiveTab("FAQ")}>
          <Text style={[styles.tab, activeTab === "FAQ" ? styles.activeTab : styles.disabledTab]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Contact Us")}>
          <Text style={[styles.tab, activeTab === "Contact Us" ? styles.activeTab : styles.disabledTab]}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {}
      {activeTab === "FAQ" ? <FAQSection /> : <ContactList />}
    </View>
  );
};

export default HelpCenterScreen;
