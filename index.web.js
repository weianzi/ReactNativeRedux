import {Provider } from 'react-redux'
import React, { AppRegistry, Component } from 'react-native'
import configureStore from './store/configureStore'
import App from './containers/App.react'
import Detail from './components/Detail.react'

const store = configureStore()
 
class ReactNativeRedux extends Component{
    render() {
        return (
            /*<Provider store={store}>
                <App />
            </Provider>*/
            <Detail />
        )
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);

//web
let app = document.createElement('div');
document.body.appendChild(app);
AppRegistry.runApplication('ReactNativeRedux', {rootTag: app});
