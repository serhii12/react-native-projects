import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

export default ImageDetail;
