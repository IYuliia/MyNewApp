import { StyleSheet, TextInput, View } from "react-native"
import { colors } from "../styles/global";
import { useState } from "react";

const PostInput = ({
    value, 
    placeholder, 
    outerStyles, 
    rightButton,
    leftButton,
    onTextChange,
    secureTextEntry = false,
    autofocus = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => {
        setIsFocused(true);
    }

    const onBlur = () => {
        setIsFocused(false);
    }

    return (
        <View style = {[styles.input, isFocused && styles.focused, outerStyles]}>
            {leftButton}
            <TextInput 
                value = {value}
                onChangeText={onTextChange}
                placeholder={placeholder}
                secureTextEntry = {secureTextEntry}
                style = {styles.baseText}
                autoFocus = {autofocus}
                autoCapitalize = "none"
                onFocus={onFocus}
                onBlur={onBlur}
            />

            {rightButton}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical:13,
        height: 50,
        borderWidth: 0,                  
        borderBottomWidth: 1,            
        borderBottomColor: colors.border_grey,
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    baseText: {
        fontSize: 16,
        fontWeight: 400,
        color: colors.border_grey,
      },
    focused: {
        borderBottomColor: colors.orange,
    }
})

export default PostInput;