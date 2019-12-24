import React, { useReducer } from 'react';
import { View, SafeAreaView, Button, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            return { ...state, colors: [...state.colors, action.payload] };
        default:
            throw new Error();
    }
};

const ColorScreen = () => {
    const [state, dispatch] = useReducer(reducer, { colors: [] });

    const _onAddColor = () => {
        dispatch({ type: 'ADD_COLOR', payload: randomRgb() });
    };

    return (
        <View>
            <Button title="Add Color" onPress={_onAddColor} />
            <FlatList
                keyExtractor={item => item}
                data={state.colors}
                renderItem={({ item = {} }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorScreen;
