import { StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../styles/global";

const Button = ({children, onPress, buttonStyle}) => {
    return (
        
            <TouchableOpacity 
            style={[style.button, buttonStyle]}
            onPress = {onPress}
            >
                {children}
            </TouchableOpacity>
       
    );
};

export default Button;

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.orange,
        borderRadius: 100,
        paddingVertical: 16,
        paddingHorizontal: 32,
    }
})