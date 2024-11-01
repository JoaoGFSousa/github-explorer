import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import { useState } from "react";
import { getRepoInfo, Repository } from "@/src/services/get-repo-data.service";


export const Home = () => {
    const [repo, setRepo] = useState("");
    const [repository, setRepository] = useState<Repository | null>();
    const [isLoading, setIsLoading] = useState(false);
    const searchRepo = async () => {
        if((repo == "")) return;
        try {
            setIsLoading(true);
            const repository = await getRepoInfo(repo);
            console.log(repository);
            setRepository(repository);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title} >GutHib Explorer</Text>
            <View style={style.inputContainer} >
                <TextInput style={style.input} placeholder="ex.: JoaoGFSousa/carfacil" onChangeText={setRepo} />
                <TouchableOpacity style={style.button}
                    onPress={searchRepo}>
                    <Text style={style.buttonText} >Buscar</Text>
                </TouchableOpacity>
            </View>
            <View>{isLoading && <ActivityIndicator />}</View>
        </SafeAreaView>
    );
};