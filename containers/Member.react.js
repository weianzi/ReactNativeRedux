'use strict';
import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native'

export default class Member extends Component{

  render(){
    return (
        <View style={styles.container}>
            <Text>会员页面</Text>
        </View>
    )
  }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:44,
      marginBottom:44,
      backgroundColor:'#f8f8f8',
      justifyContent:'center',
      alignItems:'center',
    },
});

