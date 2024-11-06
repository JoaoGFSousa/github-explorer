import { SafeAreaView,  } from "react-native-safe-area-context";
import { Text } from "react-native";

interface DetailsProps{
    route:{
        params:{
            repo:string;
        };
    };
};

export const Details = ({
    route:{
        params:{repo},
    },
}: DetailsProps) => {
    return(
        <SafeAreaView>
            <Text>Repositório</Text>
        </SafeAreaView>
    );
};