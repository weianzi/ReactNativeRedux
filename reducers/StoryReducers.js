
import { combineReducers } from 'redux';
import { 
    SELECT_SUBSTORY, INVALIDATE_SUBSTORY, 
    REQUEST_POSTS, RECEIVE_POSTS 
} from '../constants/ActionTypes';

function selectedSubstory(state=0, action){
    switch (action.type){
        case SELECT_SUBSTORY:
            return action.substory
        default:
            return state
    }
}

function posts(state={
    isFetching: false,
    didInvalidate: false,
    items: []
}, action){
    switch(action.type){
        case INVALIDATE_SUBSTORY:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvaildate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsBySubstory(state={}, action){
    switch(action.type){
        case INVALIDATE_SUBSTORY:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                ['sub' + action.substory]: posts(state[action.substory], action)
            })
            //另一种写法：
            //let nextState = {}
            //nextState['sub' + action.substory] = posts(state[action.substory], action)
            //return Object.assign({}, state, nextState)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySubstory,
    selectedSubstory
})

export default rootReducer
