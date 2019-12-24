import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import RestaurantItem from './RestaurantItem';

const defaultRestaurants = [];
const RestaurantList = ({ title, restaurants = defaultRestaurants }) => {
    if (!restaurants.length) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant = {}) => restaurant.id}
                renderItem={({ item = {}, index }) => (
                    <RestaurantItem
                        id={item.id}
                        index={index}
                        name={item.name}
                        rating={item.rating}
                        reviewCount={item.review_count}
                        imageSource={item.image_url}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RestaurantList;
