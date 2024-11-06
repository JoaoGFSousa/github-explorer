import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    detailsButton:{
        flex: 1
    },
    container:{
        flex:1,
        padding: 4,
    },
    pageTitle:{
        fontSize:20,
        fontWeight: "700",
        marginTop: 10,
        color: "#160029",
    },
    list:{
        flex:1,
        marginTop: 15,
    },
    favoriteContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: "#c3c3c3"
    },
    title:{
        color: "#160029",
        fontWeight: 600,
    },
    removeButton:{
        padding: 6,
    },
    icon:{
        fontSize:15 ,
        color: "#f90318"
    },
});