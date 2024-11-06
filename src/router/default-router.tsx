import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../pages/Home/home";
import  Icon  from "react-native-vector-icons/AntDesign";
import { Favorites } from "../pages/Favorites/favorites";

const Tab = createBottomTabNavigator();

export const DefaultRouter=()=>{
   return(
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
        <Tab.Screen name="home" component={Home} options={{
            title: "Início",
            tabBarIcon(props){
                return<Icon name ="home" color={props.color}/>;
            },
        }}
         />
        <Tab.Screen
        name="favorites"
        component={Favorites}
        options={{
            title: "Favoritos",
            tabBarIcon(props){
                return <Icon name="heart" color={props.color}/>
            },
        }}
        />
        </Tab.Navigator>
    </NavigationContainer>
   );
}