import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import BlogListRow from './BlogListRow';

const defaultBlogs = [];
const BlogList = ({ blogs = defaultBlogs }) => {
    if (!blogs.length) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={blogs}
                keyExtractor={(blog = {}) => blog.id}
                renderItem={({ item: blog = {} }) => (
                    <BlogListRow id={blog.id} title={blog.title} />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});

export default BlogList;
