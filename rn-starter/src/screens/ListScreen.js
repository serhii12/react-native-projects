import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const FRIENDS_DATA = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 27 },
    { name: 'Friend #9', age: 28 },
];

const ListScreen = () => {
    const Item = ({ name, age }) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>
                    Name: {name} - Age {age}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={FRIENDS_DATA}
                renderItem={({ item = {} }) => {
                    return <Item name={item.name} age={item.age} />;
                }}
                keyExtractor={friend => friend.name}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ListScreen;
