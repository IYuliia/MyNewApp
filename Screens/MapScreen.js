import { View, StyleSheet } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { colors } from "../styles/global";

import * as Location from 'expo-location';
import { useEffect, useState } from "react";


const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    console.log(location);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
  
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
            latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        }
        setLocation(coords);
      })();
    }, []);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: location ? location.latitude : 37.78825,
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        showsUserLocation={true}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        {location != null && (
        <Marker
          title="I am here"
          description='Hello'
          coordinate={location}
          onPress={() => {console.log("marker is pressed")}}
        // draggable={true}
        //   onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
        />
    )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
