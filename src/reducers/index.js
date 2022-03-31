import { combineReducers } from "redux";
import postsReducer from './postsReducers'


// when we have multiple reducers,
//for example, post reducers, comment reducers


const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer