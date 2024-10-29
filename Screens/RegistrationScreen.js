import { ImageBackground, TouchableWithoutFeedback, StyleSheet} from "react-native";
import BgImage from "../assets/images/PhotoBG.png";

export default function RegistrationScreen() {

return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <ImageBackground source={BgImage} style={styles.container}>
        </ImageBackground>
    </TouchableWithoutFeedback>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
})