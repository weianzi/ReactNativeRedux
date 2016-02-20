/**
 * web 入口文件
 */
'use strict';

var React = require('react-native');
var WebList = require('./views/WebList.react');
var { AppRegistry } = React;

var ReactNativeRedux = React.createClass({
    render: function(){
        return <WebList />;
    }
});

AppRegistry.registerComponent('ReactNativeRedux', () => ReactNativeRedux);

//web
var app = document.createElement('div');
document.body.appendChild(app);
AppRegistry.runApplication('ReactNativeRedux', {rootTag: app});
