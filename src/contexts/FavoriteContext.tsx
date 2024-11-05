import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getData, saveData } from "../services/storage.service";

interface FavoriteContextProps{
    favorites: string[],
    setFavorite: (repo:string) => void;
    deleteFavorite: (repo:string) => void;
}

export const FavoriteContext = createContext<FavoriteContextProps>(
    {} as FavoriteContextProps
);

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({children}:{children: ReactNode}) => {
    const[favorites,setFavorites] = useState<string[]>([]);
    const setFavorite = (repo:string)=>{
        setFavorites((prev)=>[...prev,repo]);
    };

    const deleteFavorite = (repo:string) =>{
        setFavorites((previous) =>
             previous.filter((favorite) => favorite !== repo)
    );
    };
    useEffect(()=>{
        if(favorites.length>0){
            saveData("favorites",favorites);
        }
    },[favorites])
    useEffect(()=>{
        (async ()=>{
          const storageFavorites = await getData<string[]>('favorites');
          setFavorites(storageFavorites ?? []);  
        })();
    },[]);
    return(
        <FavoriteContext.Provider
        value={{favorites, setFavorite, deleteFavorite}}>
        {children}
        </FavoriteContext.Provider>
    )
};