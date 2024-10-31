import { TouchableOpacity } from "react-native-gesture-handler"
import ProfileIcon from "../icons/ProfileIcon";

import { colors } from "../styles/global";

const ProfileButton = ({ onPress, focused }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ProfileIcon color={focused ? colors.orange : "#212121"} />
        </TouchableOpacity>
    );
};

export default ProfileButton;
