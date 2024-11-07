import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Camera, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
  const camera = useRef();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePhoto = async () => {
    if (!camera) return;

    const image = await camera?.current?.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(image.uri);
    console.log('image', image)
  }

  // const takePhoto = async () => {
  //   if (camera.current) {
  //     const image = await camera.current.takePictureAsync();
  //     if (image && image.uri) {
  //       await MediaLibrary.saveToLibraryAsync(image.uri);
  //       console.log('Image saved to library:', image);
  //     } else {
  //       console.log('Image capture failed');
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <Camera ref={camera} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});