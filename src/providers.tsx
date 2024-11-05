import { SafeAreaProvider } from "react-native-safe-area-context"
import { ReactNode } from "react"
import { FavoriteProvider } from "./contexts/FavoriteContext";

export const Provider = ({children}:{children:ReactNode}) =>{
    return <SafeAreaProvider>
        <FavoriteProvider>
        {children}
        </FavoriteProvider>
        </SafeAreaProvider>;
};
