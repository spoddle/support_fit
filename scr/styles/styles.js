import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingTop: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  tab: { fontSize: 16, paddingVertical: 8 },
  activeTab: { fontWeight: "bold", borderBottomWidth: 2, borderColor: "black" },
  disabledTab: { color: "#aaa" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  icon: { marginRight: 10 },
  text: { fontSize: 16 },
});
