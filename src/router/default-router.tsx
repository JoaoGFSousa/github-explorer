import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../pages/Home/home";
import  Icon  from "react-native-vector-icons/AntDesign";
import { Favorites } from "../pages/Favorites/favorites";
import { Details } from "../pages/Details/details";
import { createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackComponent = () =>(
        <Stack.Navigator>
            <Stack.Screen name="favoriteIndex" component={Favorites} options={{headerShown: false,}} />
            <Stack.Screen name="details" component={Details} options={{title: "Detalhes"}} />
        </Stack.Navigator>
)
 
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