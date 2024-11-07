import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../pages/Home/home";
import  Icon  from "react-native-vector-icons/AntDesign";
import { Favorites } from "../pages/Favorites/favorites";
import { Details } from "../pages/Details/details";
import { createStackNavigator} from "@react-navigation/stack";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackComponent = () =>(
        <Stack.Navigator>
            <Stack.Screen name="favoriteIndex" component={Favorites} options={{
                title: "Favoritos",
                headerShown: false,}} />
            <Stack.Screen name="details" component={Details as React.ComponentType} options={{title: "Detalhes"}} />
        </Stack.Navigator>
)
 
export const DefaultRouter=()=>{
   return(
    <NavigationContainer>
          <StatusBar backgroundColor="#e6a15c" barStyle="dark-content" />
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#ef43ef",
            tabBarInactiveTintColor:"#394651"

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
        component={StackComponent}
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