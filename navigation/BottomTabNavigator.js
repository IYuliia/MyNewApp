import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LogoutButton from "../components/logoutButton";
import BackButton from "../components/backButton";
import HomeScreen from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
       
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
        // headerShown: false,
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        // tabBarLabel: "",
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={({ navigation }) => ({
                title: "Home",
                headerRight: () => <LogoutButton onPress={() => {console.log("logout button")}} />,
                headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
                tabBarIcon: ({ focused }) =>
                    <Ionicons 
                        name="heart-circle" 
                        size = {32} 
                        color = {focused? "red" : "black"}
                    />,
                // tabBarBadge: "2",
                tabBarActiveTintColor: "red",
            })}
            />
            <Tab.Screen 
            name="Login" 
            component={LoginScreen}
            options={({ navigation }) => ({
                title: "Login",
                headerRight: () => <LogoutButton onPress={() => {console.log("logout button")}} />,
                headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
                tabBarIcon: ({ focused }) =>
                    <Ionicons 
                        name="log-in" 
                        size = {32} 
                        color = {focused? "red" : "black"}
                    />,
                // tabBarBadge: "2",
                tabBarActiveTintColor: "red",
            })}
            />
            <Tab.Screen 
            name="Registration" 
            component={RegistrationScreen} 
            options={{
                title: "Registration",
                tabBarIcon: ({focused}) => 
                <Ionicons 
                    name="add-circle" 
                    size={32} 
                    color = {focused? "red" : "black"}
                />,

            }}
            />
            <Tab.Screen 
            name="Screen_3" 
            component={RegistrationScreen} 
            options={{
                tabBarIcon: ({focused}) => 
                <Ionicons 
                    name="add-circle" 
                    size={32} 
                    color = {focused? "red" : "black"}
                />,

            }}
            />
        </Tab.Navigator>

        
   );
};

export default BottomTabNavigator;