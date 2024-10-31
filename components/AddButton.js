import { TouchableOpacity } from "react-native-gesture-handler"
import AddIcon from "../icons/AddIcon"

const AddButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AddIcon />
        </TouchableOpacity>
    );
};

export default AddButton;