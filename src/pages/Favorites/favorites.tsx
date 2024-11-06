import { useFavorite } from "@/src/contexts/FavoriteContext";
import { Text, FlatList, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import Icon from "react-native-vector-icons/AntDesign";

export const Favorites = () =>{
    const { favorites, deleteFavorite} = useFavorite();
    return(
        <SafeAreaView style={style.container} >
            <Text style={style.pageTitle} >Repositórios Favoritos</Text>
            <FlatList
            style={style.list}
            data={favorites}
            keyExtractor={(_, index)=> index.toString()}
            renderItem={({item}) => (
            <View style={style.favoriteContainer}>
                <TouchableOpacity style={style.detailsButton} >
                    <Text style={style.title}>{item}</Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={style.removeButton}
                onPress={()=> deleteFavorite(item)}
                >      
                <Icon name="delete" style={style.icon} />
            </TouchableOpacity>
            </View> )
                }
            />
        </SafeAreaView>
    );
};