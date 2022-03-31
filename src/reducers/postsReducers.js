// import { combineReducers } from "redux";
// import postsReducer from './postsReducers'


// // when we have multiple reducers,
// //for example, post reducers, comment reducers


// const rootReducer = combineReducers()
import * as actions from '../actions/PostsActions'
export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false
}

//for each action, we will make a case that returns the entire state
//plus whatever change we're making it to
// for GET_POSTS, for eg, all we want is to tell the app to set loading to true
export default function postsReducers(state= initialState, action) {
    switch(action.type){
        case actions.GET_POSTS:
            return {
                ...state,
                loading:true
            }
        case actions.GET_POSTS_SUCCESS:
            return {
                posts : action.payload,
                loading:false,
                hasErrors: false
            }
        case actions.GET_POSTS_FAILURE:
            return {
                ...state,
                loading:false,
                hasErrors: true
            }
        default :
        return state
    }
}
