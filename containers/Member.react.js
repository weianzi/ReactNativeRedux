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

//import AreaPicker from '../components/AreaPicker.react'

export default class Member extends Component{

  render(){
    return (
        <View style={styles.container}>
            {/*<AreaPicker />*/}
        </View>
    )
  }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:44,
      marginBottom:54,
      backgroundColor:'#f8f8f8',
      //justifyContent:'center',
      //alignItems:'center',
    },
});

