import { Repository } from "@/src/services/get-repo-data.service";
import { View,Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";
import { useFavorite } from "@/src/contexts/FavoriteContext";
interface RepoPreviewProps{
    repository: Repository;
}

export const RepoPreview = ({repository}: RepoPreviewProps) =>{
    const {setFavorite, favorites, deleteFavorite} = useFavorite();
    return(
        <View style={styles.container}>
            <View style={styles.containerRepo}>           
                <Text style={styles.title} >{repository.name}</Text>
                <Text style={styles.description} >{repository.description}</Text>         
            </View>
            <View style={styles.containerStats} >
                <View style={styles.statLine} >
                <Icon name="star"/>
                <Text style={styles.statText} >{repository.stargazers_count}</Text>
                </View>
                <View style={styles.statLine} >  
                <Icon name="fork"/>  
                <Text style={styles.statText} >{repository.forks_count}</Text>
                </View>
                <View style={styles.statLine} >
                <Icon name="eye"/>
                <Text style={styles.statText} >{repository.watchers_count}</Text>
                </View>
                <View style={styles.statLine} >
                <Icon name="codesquareo"/>
                <Text style={styles.statText} >{repository.language}</Text>
                </View>
            </View>
            <View style={styles.containerUser} >
            <Text style={styles.user}>{repository.owner.login}</Text>
            <Image style={styles.image} 
            source={repository.owner.avatar_url}
            contentFit= "cover" />
            </View>
            <View style={styles.containerButton}>
                {!favorites.includes(repository.full_name) &&
                (<TouchableOpacity style={styles.favButton}>
                    <Text style={styles.favButtonText} 
                    onPress={() => setFavorite(repository.full_name)}
                    >Favoritar</Text>
                </TouchableOpacity>)}
                {
                    favorites.includes(repository.full_name) && <TouchableOpacity
                      style={styles.unFavButton} 
                      onPress={()=> deleteFavorite(repository.full_name)}
                     >
                        <Text style ={styles.unFavText}>
                            Remover
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};