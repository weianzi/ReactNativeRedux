import React, { 
    Component, PropTypes, StyleSheet, Text, View,
    Image, TouchableHighlight,
} from 'react-native'

export default class ListItem extends Component {
    render() {
        const { rowData } = this.props
        return (
            <TouchableHighlight underlayColor="#fff" onPress={this.toDetail}>
                <View style={styles.itemView}>
                    <Image source={{uri:rowData.CoverUrl}} style={styles.coverImg}/>
                    <View style={styles.textView}>
                        <View style={styles.authorAndTime}>
                            <Text allowFontScaling={false} style={styles.author}>{rowData.Author}</Text>
                            <Text allowFontScaling={false} style={styles.time}>{rowData.PublishTime}</Text>
                        </View>
                        <Text allowFontScaling={false} style={styles.title}>{rowData.Title}</Text>
                        <View style={styles.countBox}>
                            <Text allowFontScaling={false} style={styles.count}>阅读{rowData.ViewCount}</Text>
                            <Text allowFontScaling={false} style={styles.dot}>·</Text>
                            <Text allowFontScaling={false} style={styles.count}>评论{rowData.CommentCount}</Text>
                            <Text allowFontScaling={false} style={styles.dot}>·</Text>
                            <Text allowFontScaling={false} style={styles.count}>喜欢{rowData.LikeCount}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    toDetail(){
      
    }
}

ListItem.propTypes = {
    //rowData: PropTypes.Object.isRequired
}

const styles = StyleSheet.create({
  itemView:{
      flex:1,
      flexDirection:'row',
      marginLeft:15,
      marginRight:15,
      height:117,
      paddingTop:15,
      paddingBottom:13,
      borderBottomWidth:1,
      borderColor:'#ebebeb',
  },
  coverImg:{
      width:85,
      height:85,
      marginRight:8,
      marginBottom:3,
  },
  textView:{
      flex:1,
  },
  authorAndTime:{
      flex:1,
      flexDirection:'row',
  },
  time:{
      marginLeft:4,
      color:'#999',
      fontSize:12,
  },
  author:{
      color:'#444',
      fontSize:12,
  },
  title:{
      height:48,
      lineHeight:22,
      fontSize:18,
      marginTop:5,
      marginBottom:5,
      color:'#222',
  },
  countBox:{
      flexDirection:'row',
  },
  count:{
      fontSize:12,
      color:'#999',
  },
  dot:{
      lineHeight:16,
      fontSize:16,
      marginRight:2,
      marginLeft:2,
      color:'#dcdcdc',
  }
})

