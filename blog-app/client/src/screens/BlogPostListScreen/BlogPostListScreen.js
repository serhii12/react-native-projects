import React, { useContext, useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import of from 'await-of';
import { Feather } from '@expo/vector-icons';
import { Context } from '../../context/BlogContext';
import BlogList from './components/BlogList';

const defaultNavigation = {};
const BlogPostListScreen = ({ navigation = defaultNavigation }) => {
    const { state: blogs, onGetBlogs } = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const [, error] = await of(onGetBlogs());
            if (error) {
                setIsLoading(false);
                setIsError(true);
            }

            setIsLoading(false);
        };
        fetchData();

        const listener = navigation.addListener('didFocus', () => fetchData());

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <>
            {isError && <Text>Something went wrong ...</Text>}

            {isLoading ? (
                <Text>Loading ...</Text>
            ) : (
                <View>
                    <BlogList blogs={blogs} />
                </View>
            )}
        </>
    );
};

BlogPostListScreen.navigationOptions = ({ navigation = defaultNavigation }) => {
    const _onCreateBlog = () => {
        navigation.navigate('CreateBlog');
    };

    return {
        headerRight: (
            <TouchableOpacity style={styles.createBlogButton} onPress={_onCreateBlog}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    createBlogButton: {
        marginRight: 8,
    },
});

export default BlogPostListScreen;
