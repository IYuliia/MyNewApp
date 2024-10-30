import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
            name = 'Login' 
            component = {LoginScreen} 
            
            options={{
                // presentation: "modal",
                title: "",
                headerShown: false,
            }}
            
            />
            <Stack.Screen 
            name = 'Registration' 
            component = {RegistrationScreen} 
            options={{
                // presentation: "modal",
                title: "",
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name = 'LoggedIn' 
            component = {BottomTabNavigator} 
            options={{
                // presentation: "modal",
                title: "",
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    )
};

export default StackNavigator;