import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Context } from '../../context/BlogContext';

const BlogPostListScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    return (
        <View>
            <Text>BlogPostListScreen</Text>
            {/* <Button title="Add Blog" onPress={onAddBlog()} /> */}
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.id}
                renderItem={({ item = {} }) => <Text>{item.title}</Text>}
            />
        </View>
    );
};

export default BlogPostListScreen;
