import { StyleSheet } from "react-native";

const stylesFAQ = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  category: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    color: "black",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  activeCategory: {
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#888",
  },
  questionContainer: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  answerText: {
    fontSize: 14,
    color: "gray",
    paddingTop: 5,
  },
});

export default stylesFAQ;
