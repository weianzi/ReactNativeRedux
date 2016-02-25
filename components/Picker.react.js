import React, { 
    Component, View, TouchableHighlight, Text, StyleSheet, PropTypes 
} from 'react-native'

export default class Picker extends Component {
  render() {
    const { value, onPress, options } = this.props
    const navText = ['全部', '生活', '百科', '养生', '文化', '器具']
    return (
        <View style={styles.navBoxView}>
            {options.map(item =>
                <TouchableHighlight style={styles.navItem} onPress={() => onPress(item)} key={item}>
                    <Text style={[styles.text, value == item ? styles.active : null]}>{navText[item]}</Text>
                </TouchableHighlight>)
            }
        </View>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  value: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    navBoxView:{
        flex:1,
        flexDirection:'row',
        marginBottom:10,
        background:'#f7f7f7'
    },
    navItem:{
        flex:1,
    },
    text:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:16,
        textAlign:'center'
    },
    active:{
        color:'#F00',
        background:'#e7e7e7'
    },

})
