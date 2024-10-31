import { TouchableOpacity } from "react-native-gesture-handler"
import PostsIcon from "../icons/PostsIcon"
import { colors } from "../styles/global";

const PostsButton = ({onPress, focused}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <PostsIcon color={focused ? colors.orange : "#212121"}/>
        </TouchableOpacity>
    );
};

export default PostsButton;