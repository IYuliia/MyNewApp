import { TouchableOpacity } from "react-native-gesture-handler"
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import { useNavigation, useRoute } from "@react-navigation/native";

const BackButton = () => {
    const navigation = useNavigation();
    const route = useRoute();

const handleGoBack = () => {
    navigation.goBack(); 
};

    return (
        <TouchableOpacity onPress={handleGoBack}>
            <ArrowLeftIcon />
        </TouchableOpacity>
    );
};

export default BackButton;