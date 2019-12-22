import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ImageDetail from '../components/ImageDetail';

const DATA = [
    {
        title: 'Forest',
        imageSource: require('../../assets/forest.jpg'),
        score: 9,
    },
    {
        title: 'Beach',
        imageSource: require('../../assets/beach.jpg'),
        score: 10,
    },
    {
        title: 'Mountain',
        imageSource: require('../../assets/mountain.jpg'),
        score: 5,
    },
];

const ImageScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item = {} }) => (
                    <ImageDetail
                        title={item.title}
                        imageSource={item.imageSource}
                        score={item.score}
                    />
                )}
                keyExtractor={image => image.title}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
    },
});

export default ImageScreen;
