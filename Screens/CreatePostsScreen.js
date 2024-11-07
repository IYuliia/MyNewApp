import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import TrashIcon from "../icons/TrashIcon";
import React, { useState, useRef } from "react";
import { Button } from "react-native";
import { useRoute } from "@react-navigation/native";

import DisabledButton from "../components/DisabledButton";
import PostInput from "../components/PostInput";
import LocationIcon from "../icons/LocationIcon";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const navigation = useNavigation();

  const handleTitleChange = (text) => setTitle(text);
  const handleLocationChange = (text) => setLocation(text);

  const onPublish = () => {
    console.log("Publish");
  };

  const handleDeletePress = () => {
    console.log("Delete");
  };

  // const openCameraScreen = () => {
  //   navigation.navigate("Camera", {
  //     onReturnImage: (imageUri) => setCapturedImage(imageUri)
  //   });
  // };

  const openCameraScreen = () => {
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.placeholder} />
      <View style={styles.placeholderOverlay}>
        <TouchableOpacity onPress={openCameraScreen}>
          <View style={styles.placeholderCircle}>
            <CameraIcon />
          </View>
        </TouchableOpacity>
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
  cameraContainer: {
    width: "100%",
    height: 240,
    backgroundColor: colors.light_grey,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
});

export default CreatePostsScreen;

// import { Camera, useCameraPermissions } from "expo-camera";
// import { useRef, useState, useEffect } from "react";
// import { Button, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
// import * as MediaLibrary from "expo-media-library";

// import CameraIcon from "../icons/CameraIcon";
// import { colors } from "../styles/global";

// const CreatePostsScreen = () => {
//   const [facing, setFacing] = useState("back");
//   const [permission, requestPermission] = useCameraPermissions();
//   const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     if (!permission?.granted) {
//       requestPermission();
//     }
//     if (!permissionResponse?.granted) {
//       requestLibraryPermission();
//     }
//   }, []);

//   function toggleCameraFacing() {
//         setFacing((current) => (current === "back" ? "front" : "back"));
//       }

//   const takePhoto = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setCapturedImage(photo.uri);
//       await MediaLibrary.saveToLibraryAsync(photo.uri);
//     }
//   };

//   if (!permission?.granted) {
//     return (
//       <View style={styles.permissionContainer}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="Grant permission" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.cameraContainer}>
//         {capturedImage ? (
//           <Image source={{ uri: capturedImage }} style={styles.imagePreview} />
//         ) : (
//           <Camera style={styles.camera} type={facing} ref={cameraRef}>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//                 <Text style={styles.text}>Flip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.button} onPress={takePhoto}>
//                 <CameraIcon />
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         )}
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Назва..."
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Місцевість..."
//         value={location}
//         onChangeText={setLocation}
//       />

//       <TouchableOpacity
//         style={styles.publishButton}
//         onPress={() => console.log("Publishing", { title, location, capturedImage })}
//       >
//         <Text style={styles.publishButtonText}>Опублікувати</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: colors.white,
//   },
//   permissionContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   message: {
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 16,
//   },
//   cameraContainer: {
//     width: "100%",
//     height: 240,
//     backgroundColor: colors.light_grey,
//     borderRadius: 8,
//     overflow: "hidden",
//     marginBottom: 16,
//   },
//   camera: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   imagePreview: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 8,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     paddingBottom: 20,
//     backgroundColor: "transparent",
//   },
//   button: {
//     backgroundColor: "white",
//     padding: 10,
//     margin: 10,
//     borderRadius: 50,
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: colors.primary,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderColor: colors.border_grey,
//     padding: 10,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   publishButton: {
//     backgroundColor: colors.primary,
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   publishButtonText: {
//     color: "white",
//     fontSize: 16,
//   },
// });

// export default CreatePostsScreen;
