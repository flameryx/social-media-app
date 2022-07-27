import * as api from '../api';

// Action Creators: functions that return an action
// Since fetching all posts takes some time to load, this should be an asynchronous action
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        // An action is an object that has the type and the payload (data)
        const action = { type: 'FETCH_ALL', payload: data };

        // When dealing with async actions, we use react-redux dispatch
        dispatch(action);

    } catch (error) {
        console.log(error.message);
    }
}