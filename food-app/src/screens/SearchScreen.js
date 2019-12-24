import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import useYelpApi from '../hooks/useYelpApi';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [term, setTermValue] = useState('');
    const [{ data: restaurants = [], isLoading, isError }, doFetch] = useYelpApi();
    const [
        { costEffectiveRestaurants, mediumPriceRestaurants, highPriceRestaurants },
        setFilterData,
    ] = useState({
        costEffectiveRestaurants: [],
        mediumPriceRestaurants: [],
        highPriceRestaurants: [],
    });

    useEffect(() => {
        const filterResultsByPrice = price =>
            restaurants.filter((restaurant = {}) => restaurant.price === price);

        const costEffectiveRestaurants = filterResultsByPrice('$');
        const mediumPriceRestaurants = filterResultsByPrice('$$');
        const highPriceRestaurants = filterResultsByPrice('$$$');

        setFilterData({
            costEffectiveRestaurants,
            mediumPriceRestaurants,
            highPriceRestaurants,
        });
    }, [restaurants]);

    const _onTermChange = searchValue => {
        setTermValue(searchValue);
    };

    const _onTermSubmit = () => {
        doFetch(term);
    };

    return (
        <>
            <SearchBar term={term} onTermChange={_onTermChange} onTermSubmit={_onTermSubmit} />

            {isError && <Text>Something went wrong ...</Text>}

            {isLoading ? (
                <Text>Loading ...</Text>
            ) : (
                <ScrollView>
                    <RestaurantList title="Cost Effective" restaurants={costEffectiveRestaurants} />
                    <RestaurantList title="Bit Pricier" restaurants={mediumPriceRestaurants} />
                    <RestaurantList title="Big Spender" restaurants={highPriceRestaurants} />
                </ScrollView>
            )}
        </>
    );
};

export default SearchScreen;
