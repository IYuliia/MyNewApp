import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";

const CommentsScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.postImage} source={require("../assets/images/postImage_1.png")} />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.white,
    paddingHorizontal: 16,
    flex: 1,
    },
    postImage: {
        width: "100%",
        borderRadius: 8,
        height: 240, 
    },
})

export default CommentsScreen;