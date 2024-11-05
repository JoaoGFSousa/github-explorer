import AsyncStorage from "@react-native-async-storage/async-storage";
const PREFIX = "github-exporer@";

export const saveData = async <T = any> (key:string, value:T) =>{
    try{
        await AsyncStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    }catch(error){
        console.log(error);
    }
};

export const getData = async<T=any>(key:string)=> {
    try{
        const data = await AsyncStorage.getItem(`${PREFIX}${key}`);
        return JSON.parse(data as string) as T;
    }catch (e) {
        console.log(e)
    }
};
