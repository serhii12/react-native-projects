import React, { useContext, useCallback } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import { Context } from '../../../context/BlogContext';

const defaultNavigation = {};
const BlogListRow = ({ id, title, navigation = defaultNavigation }) => {
    const { onDeleteBlog } = useContext(Context);

    const _onOpenBlogDetails = useCallback(() => {
        navigation.navigate('BlogPostDetails', { id });
    }, [navigation.navigate]);

    const _onDeleteBlog = useCallback(() => {
        onDeleteBlog(id);
    }, [id]);

    return (
        <TouchableOpacity onPress={_onOpenBlogDetails}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={_onDeleteBlog}>
                    <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
    },
    icon: {
        fontSize: 24,
    },
});

export default withNavigation(BlogListRow);
