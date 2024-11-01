import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import TrashIcon from "../icons/TrashIcon";
import { useState } from "react";

import DisabledButton from "../components/DisabledButton";
import PostInput from "../components/PostInput";
import LocationIcon from "../icons/LocationIcon";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleTitleChange = (text) => setTitle(text);
  const handleLocationChange = (text) => setLocation(text);

  const onPublish = () => {
    console.log("Publish");
  };

  const handleDeletePress = () => {
    console.log("Delete");
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.postImage} source={require("../assets/images/postImage_1.png")} /> */}
      <Image style={styles.placeholder} />
      <View style={styles.placeholderOverlay}>
        <View style={styles.placeholderCircle}>
          <CameraIcon />
        </View>
      </View>
      <Text style={styles.text}>Завантажте фото</Text>
      <View style={[styles.innerContainer, styles.inputContainer]}>
        <PostInput
          value={title}
          autofocus={true}
          placeholder="Назва..."
          onTextChange={handleTitleChange}
        />
        
          <PostInput
            value={location}
            placeholder="Місцевість..."
            leftButton={<LocationIcon />}
            // outerStyles={styles.passwordButton}
            onTextChange={handleLocationChange}
          />
        
      </View>
      <View style={styles.buttonContainer}>
        <DisabledButton onPress={onPublish}>
          <Text style={[styles.text, styles.buttonText]}>Опублікувати</Text>
        </DisabledButton>
      </View>
      <TouchableOpacity style={styles.trashButton} onPress={handleDeletePress}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  postImage: {
    width: "100%",
    borderRadius: 8,
    height: 240,
  },
  placeholder: {
    width: "100%",
    borderRadius: 8,
    height: 240,
    backgroundColor: colors.light_grey,
    marginBottom: 8,
  },
  placeholderCircle: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderOverlay: {
    position: "absolute",
    top: 40,
    left: 20,
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.border_grey,
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  buttonContainer: {
    marginTop: 32,
  },
  buttonText: {
    textAlign: "center",
  },
  trashButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light_grey,
    position: "absolute",
    bottom: 34,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: -25 }],
  },
});

export default CreatePostsScreen;
