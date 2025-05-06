import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";

const Header = ({ title, onBack }) => {

  const showAlert = () => {
    Alert.alert(
      "Інформація",
      "Ця програма створена, щоб допомагати студентам ФІТ.",
      [{ text: "Закрити" }]
    );
  };


  
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={showAlert}>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </TouchableOpacity>
        
    </View>
  );
};

export default Header;
