/**
 * android 入口
 */
'use strict';

var React = require('react-native');
var WebList = require('./views/WebList.react');
var { AppRegistry } = React;


var ReactNativeRedux = React.createClass({
    render: function(){
        return <WebList />;
    }
})

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);

