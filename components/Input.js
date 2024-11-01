import { StyleSheet, TextInput, View } from "react-native"
import { colors } from "../styles/global";
import { useState } from "react";

const Input = ({
    value, 
    placeholder, 
    outerStyles, 
    rightButton,
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
        padding:16,
        height: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border_grey,
        backgroundColor: colors.light_grey,
    },
    baseText: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18,
        color: colors.black_primary,
      },
    focused: {
        backgroundColor: colors.white,
        borderColor: colors.orange,
    }
})

export default Input;