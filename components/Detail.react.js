import React, { 
    Component, PropTypes, StyleSheet, Text, View,
    Platform, Image,
} from 'react-native'
import HTMLWebView from 'react-native-html-webview'

const story = {
	Title: '盖碗喝茶的“暗号”你都知道吗？',
	Cover: "http://img01.chatu.com/group1/M00/00/B8/CgoBAlbL0_WRaP_LAACDbiEyfDE799.jpg",
	Content: '<p><img src=\"http://img01.chatu.com/group1/M00/02/31/CgoBAVbL1GyTlFwxAADna-fb09Q031.jpg\" title=\"5.jpg\" alt=\"5.jpg\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; white-space: pre-wrap; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6000003814697px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; line-height: 1.6;\"></span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; white-space: pre-wrap; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6000003814697px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; line-height: 1.6;\">看到这里，想必大家都明白了这几种“暗号”了。要知道茶馆在古代人们的生活中十分重要，不仅是休闲的场所，也是消息最多且流通最快的地方，在茶的“江湖”上混，不懂点“暗号”是不行的哦!</span><br style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; white-space: normal; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px; color: rgb(136, 136, 136);\"><br style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;\"/></span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; white-space: normal; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px; color: rgb(136, 136, 136);\">本文来自恒福，<span style=\"margin: 0px; padding: 0px; max-width: 100%; line-height: 25.6px; box-sizing: border-box !important; word-wrap: break-word !important;\">版权归原作者所有，因种种原因未能联系上原作者，如作者看到请与我们联系作妥善处理，谢谢！</span></span></p>'
}

export default class DetailView extends Component {
	render() {
		//const { story } = this.props
		let html = `<!DOCTYPE html>
					<html>
						<head>
							<style>img{width:100%}</style>
						</head>
	        			<body>
	        				${story.Content}
	        			</body>
	        		</html>`
		return (
			<View style={styles.container}>
				<View>
					<Text>{story.title}</Text>
					<Image
						style={styles.cover}
						source={{uri:story.Cover}} />
				</View>
				<HTMLWebView
				    html={html}
				    makeSafe={false}
				    //closeLoading={}
				    autoHeight={true} />
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
	title:{

	},
	cover:{

	},
})