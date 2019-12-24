import React, { useState, useEffect } from 'react';
import of from 'await-of';
import { SafeAreaView, Text, FlatList, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantDetailsScreen = ({ navigation = {} }) => {
    const [restaurantPhotos, setRestaurantPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const restaurantId = navigation.getParam('id');
        setIsLoading(true);
        const fetchData = async () => {
            const [{ data = {} }, error] = await of(yelp.get(`/${restaurantId}`));
            if (error) {
                setIsError(true);
            }

            setRestaurantPhotos(data.photos);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            {isError && <Text>Something went wrong ...</Text>}

            {isLoading ? (
                <Text>Loading ...</Text>
            ) : (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Restaurant Photos:</Text>
                    <FlatList
                        data={restaurantPhotos}
                        keyExtractor={photo => photo}
                        renderItem={({ item = {} }) => (
                            <Image style={styles.image} source={{ uri: item }} />
                        )}
                    />
                </SafeAreaView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
});

export default RestaurantDetailsScreen;
