import { SafeAreaProvider } from "react-native-safe-area-context"
import { ReactNode } from "react"

export const Provider = ({children}:{children:ReactNode}) =>{
    return <SafeAreaProvider>{children}</SafeAreaProvider>;
};
