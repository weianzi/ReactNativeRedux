var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Platform,
  TouchableHighlight,
} = React;

//var fetch = Platform.OS === 'web' ? require('ReactJsonp') : require('ReactFetch');

module.exports = React.createClass({
  getInitialState: function() {
      return {
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
          loaded: false,
          isloadingNextPage: false, //是否正在加载下一页
          currentPage: 0,
          totalCount: 0,//总数量
          pageSize: 10,
      };
  },
  componentDidMount: function(){
    var This = this;
    this._getStoryList(2, function(data){
        setTimeout(function(){       
          This.setState({
              dataSource: This.state.dataSource.cloneWithRows(data.Data),
              currentPage: data.PageIndex,
              totalCount: data.TotalCount,
              pageSize: data.PageSize,
              loaded: true,
              isloadingNextPage: false
          });          
        }, 600);
    });
  },
  _getStoryList: function(page, callback) {
      var domain = 'http://weixin.chatu.com';
      var url = domain +'/api/article/GetList?pageindex=' + page + '&pagesize=10';
      fetch(url)
          .then((response) => response.json())
          .then((responseText) => {
              callback(responseText);
          })
          .catch((error) => {
              console.log(error);
          });
  },
  render: function() {
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          onEndReachedThreshold={10}
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
          style={styles.listView} />
    );
  },
  _renderRow: function(rowData) {
      return (
          <TouchableHighlight style={styles.touchBtn} underlayColor="#fff">
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
      );
  },
});

var styles = StyleSheet.create({
  listView:{
      flex: 1,
      //marginTop:64,
      //marginBottom:46,
      backgroundColor:'#f8f8f8',
  },
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
});

