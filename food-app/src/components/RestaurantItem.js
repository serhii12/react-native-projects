import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const RestaurantItem = ({ index, id, name, rating, reviewCount, imageSource, navigation = {} }) => {
    const _onOpenRestaurantDetailsScreen = () => {
        navigation.navigate('RestaurantDetails', { id });
    };

    return (
        <TouchableOpacity
            style={[styles.item, index > 0 && styles.mL15]}
            onPress={_onOpenRestaurantDetailsScreen}
        >
            <Image style={styles.image} source={{ uri: imageSource }} />
            <Text style={styles.name}>{name}</Text>
            <Text>
                {rating} Starts, {reviewCount} Reviews
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
    },
    mL15: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default withNavigation(RestaurantItem);
