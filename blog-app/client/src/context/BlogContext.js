import of from 'await-of';
import {
    GET_BLOGS_POST,
    CREATE_BLOG_POST,
    UPDATE_BLOG_POST,
    DELETE_BLOG_POST,
} from '../constants/constants';
import { createStore } from './createContext';
import jsonServer from '../api/jsonServer';

const initialBlogState = [];
const reducer = (state = initialBlogState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS_POST:
            return payload;
        case UPDATE_BLOG_POST:
            return state.map(blogPost => (blogPost.id === payload.id ? payload : blogPost));
        case DELETE_BLOG_POST:
            return state.filter(blogPost => blogPost.id !== payload);
        default:
            return state;
    }
};

const actions = {
    onGetBlogs: dispatch => async () => {
        const [{ data: blogs }, error] = await of(jsonServer.get('/blogposts'));
        if (error) {
            console.error('Could not fetch blogs.', error);
            throw error;
        }

        dispatch({ type: GET_BLOGS_POST, payload: blogs });
    },

    onCreateBlog: () => async (title, content) => {
        const [, error] = await of(jsonServer.post('/blogposts', { title, content }));
        if (error) {
            console.error('Could not create a blog.', error);
            throw error;
        }
    },

    onDeleteBlog: dispatch => async id => {
        const [, error] = await of(jsonServer.delete(`/blogposts/${id}`));
        if (error) {
            console.error('Could not delete the blog.', error);
            throw error;
        }

        dispatch({ type: DELETE_BLOG_POST, payload: id });
    },

    onUpdateBlog: dispatch => async (id, title, content) => {
        const [, error] = await of(jsonServer.put(`/blogposts/${id}`, { title, content }));
        if (error) {
            console.error('Could not update the blog.', error);
            throw error;
        }

        dispatch({
            type: UPDATE_BLOG_POST,
            payload: { id, title, content },
        });
    },
};

export const { Context, Provider } = createStore(reducer, actions, initialBlogState);
