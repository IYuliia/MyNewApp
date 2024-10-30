import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../styles/global";

import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/button";


const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({navigation, route}) => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isPasswordVisible, setIsPasswordVisible] = useState(true);

const handleEmailChange = (value) => {
    setEmail(value);
};

const handlePasswordChange = (value) => {
    setPassword(value);
};

const showPassword = () => {
    setIsPasswordVisible(prev => !prev)
}

const onLogin = () => {
    // console.log("login")
    navigation.navigate('LoggedIn');
};

const onSignUp = () => {
    // console.log("sign up")
    // navigation.navigate('Registration', {userEmail: email})
    navigation.navigate('Registration')
};

const showButton = (
    <TouchableOpacity
        onPress={showPassword}
    >
        <Text s style={[styles.baseText, styles.passwordButtonText]}>{isPasswordVisible ? "Показати" : "Сховати" }</Text>
    </TouchableOpacity>
);

    return (
        <TouchableWithoutFeedback
            onPress = {() => Keyboard.dismiss()}>
            <>
            <Image 
                source = {require("../assets/images/PhotoBG.jpg")}
                resizeMode="cover"
                style={styles.image}
            />
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                style = {styles.container}>
            
                <View
                    style={styles.formContainer
                }>
                <Text style={styles.title}>Увійти</Text>

                    <View 
                    style={[styles.innerContainer, styles.inputContainer]}>

                    <Input 
                    value = {email}
                    autofocus = {true}
                    placeholder="Адреса електронної пошти"
                    onTextChange={handleEmailChange}
                    
                    />
                    <Input 
                    value = {password}
                    placeholder="Пароль"
                    rightButton={showButton}
                    outerStyles={styles.passwordButton}
                    onTextChange={handlePasswordChange}
                    secureTextEntry={isPasswordVisible}
                    />
                </View>
                <View style={[styles.innerContainer, styles.buttonContainer]}>
                    <Button onPress={onLogin}>
                        <Text 
                        style={[styles.baseText, styles.loginButtonText]}
                        >
                        Увійти
                        </Text>
                    </Button>

                <View style={styles.signUpContainer}>
                    <Text 
                    style={[styles.baseText, styles.passwordButtonText]}
                    >
                    Немає акаунту?
                        <TouchableWithoutFeedback onPress={onSignUp}>
                            <Text style={styles.signUpText}> Зареєструватися</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                </View>
            </View>
            </View>
        </KeyboardAvoidingView>
        </>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    innerContainer: {
        gap: 16,
    },
    inputContainer: {
        marginTop: 32,
    }, 
    buttonContainer: {
        marginTop: 42,
    },
    image: {
        position: "absolute",
        top: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
    },
    formContainer: {
        width: SCREEN_WIDTH,
        height: "50%",
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    title: {
        fontSize: 30,
        fontWeight: "500",
        lineHeight: 36,
        textAlign: "center",
        color: colors.black_primary,
    },
    showButton: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18,
        color: colors.blue,
    },
    passwordButton: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    baseText: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18,
      },
    loginButtonText: {
        color: colors.white,
        textAlign: "center",
      },
    passwordButtonText: {
        color: colors.blue,
      },
    passwordButton: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    signUpContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    signUpText: {
        textDecorationLine: "underline",
      }
})