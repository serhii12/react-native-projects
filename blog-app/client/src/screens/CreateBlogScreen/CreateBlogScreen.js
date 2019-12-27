import React, { useContext } from 'react';
import BlogPostForm from '../../components/BlogPostForm';
import { Context } from '../../context/BlogContext';

const defaultNavigation = {};
const CreateBlogScreen = ({ navigation = defaultNavigation }) => {
    const { onCreateBlog } = useContext(Context);

    const _onCreateBlog = (title, content) => {
        onCreateBlog(title, content);
        navigation.navigate('BlogPostList');
    };

    return <BlogPostForm onSubmit={_onCreateBlog} />;
};

export default CreateBlogScreen;
