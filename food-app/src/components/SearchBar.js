import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const defaultOnTermChange = () => {};
const defaultOnTermSubmit = () => {};
const SearchBar = ({
    onTermChange = defaultOnTermChange,
    onTermSubmit = defaultOnTermSubmit,
    term = '',
}) => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCorrect={false}
                placeholder="Search"
                autoCapitalize="none"
                value={term}
                style={styles.inputStyle}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal: 15,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;
