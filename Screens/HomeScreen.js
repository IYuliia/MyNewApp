import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/global';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('Posts');
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingTop: 32,
      },
    text: {
        color: colors.border_grey,
    }
})

export default HomeScreen;
