import React, { 
    Component, StyleSheet, Text, View,
} from 'react-native'

export default class EndView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>没有内容</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',	
	},
	text: {
	},
})