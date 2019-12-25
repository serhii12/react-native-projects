import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BlogPostListScreen from './src/screens/BlogPostListScreen';
import BlogPostDetailsScreen from './src/screens/BlogPostDetailsScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
    {
        BlogPostList: {
            screen: BlogPostListScreen,
        },
        BlogPostDetails: {
            screen: BlogPostDetailsScreen,
        },
        CreateBlog: {
            screen: CreateBlogScreen,
        },
        EditBlog: {
            screen: EditBlogScreen,
        },
    },
    {
        initialRouteName: 'BlogPostList',
        defaultNavigationOptions: {
            title: 'Blogs',
        },
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
};
