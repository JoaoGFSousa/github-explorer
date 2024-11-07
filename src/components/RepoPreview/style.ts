import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 10,
    gap: 4,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#160029",
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: "#EAEAEA",
    elevation: 14,
  },
  containerRepo: {
    marginBottom: 4,
  },
  containerStats: {
    marginBottom: 4,
    paddingTop: 4,
    borderTopColor: "#fcf9ff",
    borderTopWidth: 2,
  },
  containerUser: {
    gap: 6,
    marginBottom: 4,
    paddingTop: 4,
    borderTopColor: "#fcf9ff",
    borderTopWidth: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#160029",
  },
  description: {
    fontSize: 15,
    color: "#969696",
  },
  statLine: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  statIcon: {},
  statText: {
    fontWeight: "bold",
    color: "#160029",
    fontSize: 14,
  },
  user: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#160029",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  containerButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
    paddingTop: 4,
    borderTopColor: "#fcf9ff",
    borderTopWidth: 2,
  },
  favButton: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#f9ff6d",
    alignItems: "center",
    justifyContent: "center",
  },
  favButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  unFavButton: {
    flex: 1,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#f90325",
    alignItems: "center",
    justifyContent: "center",
  },
  unFavText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
