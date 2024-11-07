
import { RepoPreview } from "@/src/components/RepoPreview/repo-preview";
import { getRepoInfo, Repository } from "@/src/services/get-repo-data.service";
import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./style";

interface DetailsProps {
    route: {
        params: {
            repo: string;
        };
    };
};

export const Details = ({
    route: {
        params: { repo },
    },
}: DetailsProps) => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const searchRepo = async () => {
        setIsLoading(true);
        try {
            const repository = await getRepoInfo(repo);
            setRepository(repository);
        } catch (e) {
            console.log(e);
        } setIsLoading(false);
    };
    useEffect(() => {
        searchRepo();
    }, [repo]);
    return (
        <ScrollView style={{ flex: 1 }} >
            <Text style={styles.title} >
                Veja seu repositório
            </Text>
            {isLoading && <ActivityIndicator size="large" color={"#9e6788"} />}

            {!isLoading && repository && (
                <View style={styles.container}  >
                    <RepoPreview repository={repository as Repository} />
                    <TouchableOpacity onPress={searchRepo} style={styles.refreshButton} >
                        <Icon name="sync" size={30} color={"#394651"} />
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
};