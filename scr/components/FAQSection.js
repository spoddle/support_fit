import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";  
import { AntDesign } from "@expo/vector-icons";
import stylesFAQ from "../styles/stylesFAQ";

const categories = ["General", "Account", "smth", "smth2"];

const faqData = [
  { id: "1", category: "General", question: "Що таке чисельник і знаменник", answer: "Чисельник перший тиждень навчання, наступний тиждень знаменник. Далі вони чергуватимуться." },
  { id: "2", category: "General", question: "Хто такий куратор?", answer: "Ваш хелпер, до якого ви звертаєтесь, якщо староста не зміг вирішити ваші питання." },
  { id: "3", category: "General", question: "Де знайти коворкінг?", answer: "1-117" },
  { id: "4", category: "General", question: "Хто такий староста і чому я його боюсь?", answer: "Представник вашої групи, сама інколи боюсь" },
];

const FAQSection = () => {
  const navigation = useNavigation(); 
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");

  const handleCategoryPress = (category) => {
    if (category === "smth") {
      navigation.navigate("cryingStudents"); 
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredFaq = faqData.filter(
    (item) => item.category === selectedCategory && item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View>
      {/* Категорії */}
      <View style={stylesFAQ.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat} onPress={() => handleCategoryPress(cat)}>
            <Text style={[stylesFAQ.category, selectedCategory === cat && stylesFAQ.activeCategory]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Пошук */}
      <View style={stylesFAQ.searchContainer}>
        <AntDesign name="search1" size={18} color="#888" />
        <TextInput
          style={stylesFAQ.searchInput}
          placeholder="Search for help"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* FAQ Питання */}
      <FlatList
        data={filteredFaq}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity 
              style={stylesFAQ.questionContainer} 
              onPress={() => setExpanded(expanded === item.id ? null : item.id)}
            >
              <Text style={stylesFAQ.questionText}>{item.question}</Text>
              <AntDesign name={expanded === item.id ? "up" : "down"} size={18} color="black" />
            </TouchableOpacity>
            {expanded === item.id && <Text style={stylesFAQ.answerText}>{item.answer}</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default FAQSection;
