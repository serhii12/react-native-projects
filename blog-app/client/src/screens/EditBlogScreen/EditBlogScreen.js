import React, { useContext } from 'react';
import BlogPostForm from '../../components/BlogPostForm';
import { Context } from '../../context/BlogContext';

const defaultNavigation = {};
const EditBlogScreen = ({ navigation = defaultNavigation }) => {
    const { state: blogs, onUpdateBlog } = useContext(Context);

    const id = navigation.getParam('id');

    const blogPost = blogs.find(blogPost => blogPost.id === navigation.getParam('id'));

    const _onUpdateBlog = (title, content) => {
        onUpdateBlog(id, title, content);
        navigation.pop();
    };

    return (
        <BlogPostForm onSubmit={_onUpdateBlog} title={blogPost.title} content={blogPost.content} />
    );
};

export default EditBlogScreen;
