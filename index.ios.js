import React, { AppRegistry, Component } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App.react'
import WebList from './views/WebList.react'

const store = configureStore()
 
class ReactNativeRedux extends Component{
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);



/*import React, { AppRegistry, Component } from 'react-native'
import WebList from './views/WebList.react'

class ReactNativeRedux extends Component{
    render() {
        return <WebList />
    }
}

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);*/