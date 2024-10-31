import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('Posts');
    }, [navigation]);

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
};

export default HomeScreen;
