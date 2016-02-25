import React, { AppRegistry, Component } from 'react-native'
import {Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App.react'

const store = configureStore()
 
class ReactRedux extends Component{
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactRedux', () => ReactRedux);

//web
let app = document.createElement('div');
document.body.appendChild(app);
AppRegistry.runApplication('ReactRedux', {rootTag: app});
