import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH } from '../constants/actionTypes';

// eslint-disable-next-line
export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_SEARCH:
            return action.payload;
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}
