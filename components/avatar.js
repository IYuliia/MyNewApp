import {
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  
  
  const Avatar = ({ image, icon, OnClick }) => {
    return (
      <View style={styles.photoContainer}>
        <View style={styles.imgWrap}>
          <Image style={styles.photo} source={image} />
          <TouchableWithoutFeedback onPress={OnClick}>
            <View style={styles.iconWrap}>
              {icon}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };
  
  export default Avatar;
  
  const styles = StyleSheet.create({
    photoContainer: {
      width: "100%",
      height: 0,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },
    photo: {
      position: "absolute",
      height: 120,
      width: 120,
      borderRadius: 16,
    },
    icon: {
      width: 40,
      height: 40,
    },
    iconWrap: {
      position: "absolute",
      bottom: 10,
      right: -20,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
    },
    imgWrap: {
      position: "relative",
      width: 120,
      height: 120,
      borderRadius: 16,
      top: 0,
    }
  });