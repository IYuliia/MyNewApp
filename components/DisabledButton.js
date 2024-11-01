import { StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../styles/global";

const DisabledButton = ({children, onPress, buttonStyle}) => {
    return (
        
            <TouchableOpacity 
            style={[style.button, buttonStyle]}
            onPress = {onPress}
            >
                {children}
            </TouchableOpacity>
       
    );
};

export default DisabledButton;

const style = StyleSheet.create({
    button: {
        backgroundColor: colors.light_grey,
        borderRadius: 100,
        paddingVertical: 16,
        paddingHorizontal: 32,
        justifyContent: "center",
        alignItems: "center",
    }
})