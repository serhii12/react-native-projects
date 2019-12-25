import of from 'await-of';
import {
    GET_BLOGS_POST,
    CREATE_BLOG_POST,
    UPDATE_BLOG_POST,
    DELETE_BLOG_POST,
} from '../constants/constants';
import { createStore } from './createContext';

const initialBlogState = [];
const reducer = (state = initialBlogState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS_POST:
            return '1';
        case CREATE_BLOG_POST:
            return '1';
        case UPDATE_BLOG_POST:
            return '1';
        case DELETE_BLOG_POST:
            return '1';
        default:
            return state;
    }
};

const actions = {
    onGetBlogs: dispatch => async () => {
        dispatch({ type: GET_BLOGS_POST, payload: response.data });
    },
    onCreateBlog: dispatch => async (title, content) => {
        dispatch({ type: CREATE_BLOG_POST, payload: { title, content } });
    },
    onDeleteBlog: dispatch => async id => {
        dispatch({ type: DELETE_BLOG_POST, payload: id });
    },
    onUpdateBlog: dispatch => async (id, title, content) => {
        dispatch({
            type: UPDATE_BLOG_POST,
            payload: { id, title, content },
        });
    },
};

export const { Context, Provider } = createStore(reducer, actions, initialBlogState);
