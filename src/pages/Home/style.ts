import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  container: {
    backgroundColor: "#f7fafd",
    flex: 1,
    padding: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  loading:{
    marginTop: 15,
  },
  input: {
    padding: 6,
    backgroundColor: "#ededed",
    borderRadius: 5,
    flex: 1,
  },
  button: {
    backgroundColor: "#23d15e",
    borderRadius: 5,
    padding: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
