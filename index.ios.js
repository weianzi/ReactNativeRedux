/**
 * IOS 入口文件
 */
//import 'babel-polyfill';
import React, { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { selectSubstory, fetchPosts } from './actions/StoryActions'
import App from './containers/App';

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, //允许我们dispatch()
    loggerMiddleware //用来打印action日志的中间件
)(createStore)

const store = createStoreWithMiddleware(rootReducer)

store.dispatch(selectSubreddit(1))
store.dispatch(fetchPosts(1)).then(() =>
  console.log(store.getState())
)
store.dispatch(fetchPostsIfNeeded(1)).then(() =>
  console.log(store.getState())
)
var ReactNativeRedux = React.createClass({
    render: function(){
        return (
        	<Provider store={store}>
        		<App />
        	</Provider>
        );
    }
});

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);