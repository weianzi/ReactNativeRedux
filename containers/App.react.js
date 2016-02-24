/**
 * 
 */
'use strict';
import React, {
  AppRegistry,  Component, PropTypes,  StyleSheet, Text, 
  View,  Image,  ListView,  Platform,  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import { selectSubstory, fetchPostsIfNeeded, invalidatesubreddit } from '../actions/storyAction'
import List from '../components/List.react'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const { dispatch, selectedSubstory } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubstory))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubstory !== this.props.selectedSubstory) {
      const { dispatch, selectedSubstory } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubstory))
    }
  }

  render() {
    const { posts, isFetching } = this.props
    return (
      <View>
        {isFetching && posts.Data.length === 0 &&
          <Text>Loading...</Text>
        }
        {!isFetching && posts.Data.length === 0 &&
          <Text>没有内容</Text>
        }
        {posts.Data.length > 0 &&
          <List dataSource = {posts.Data}/>
        }
      </View>
    )
  }
}

App.propTypes = {
  selectedSubstory: PropTypes.number.isRequired,
  posts: PropTypes.Object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedSubstory, postsBySubstory } = state
  return {

  }
}

export default connect(mapStateToProps)(App)
