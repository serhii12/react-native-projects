import React, { useState, useCallback } from 'react';
import { SafeAreaView, TextInput, Text, StyleSheet, Button } from 'react-native';

const defaultOnSubmit = () => {};
const BlogPostForm = ({ onSubmit = defaultOnSubmit, title = '', content = '' }) => {
    const [newTitle, setTitle] = useState(title);
    const [newContent, setContent] = useState(content);

    const _onChangeTitle = useCallback(
        text => {
            setTitle(text);
        },
        [setTitle]
    );

    const _onChangeContent = useCallback(
        text => {
            setContent(text);
        },
        [setContent]
    );

    const _onSubmit = () => {
        onSubmit(newTitle, newContent);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} onChangeText={_onChangeTitle} value={newTitle} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} onChangeText={_onChangeContent} value={newContent} />
            <Button title="Save Blog Post" onPress={_onSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginVertical: 15,
        marginHorizontal: 15,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 8,
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default BlogPostForm;
