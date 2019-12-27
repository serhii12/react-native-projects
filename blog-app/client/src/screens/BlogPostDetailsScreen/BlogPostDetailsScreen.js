import React, { useContext } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from '../../context/BlogContext';

const BlogPostDetailsScreen = ({ navigation }) => {
    const { state: blogs } = useContext(Context);
    const blogPost = blogs.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </SafeAreaView>
    );
};

BlogPostDetailsScreen.navigationOptions = ({ navigation }) => {
    const _onEditBlog = () => {
        navigation.navigate('EditBlog', { id: navigation.getParam('id') });
    };

    return {
        headerRight: (
            <TouchableOpacity onPress={_onEditBlog}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: 'black',
        height: '50%',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    content: {
        marginLeft: 5,
        fontSize: 18,
        marginTop: 8,
        marginBottom: 10,
    },
});

export default BlogPostDetailsScreen;
