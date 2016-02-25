import { 
    SELECT_SUBSTORY, INVALIDATE_SUBSTORY, 
    REQUEST_POSTS, RECEIVE_POSTS 
} from '../constants/actionType';

export function selectSubstory(substory) {
  return {
    type: SELECT_SUBSTORY,
    substory
  }
}

export function invalidatesubreddit(substory) {
  return {
    type: INVALIDATE_SUBSTORY,
    substory
  }
}

function requestPosts(substory) {
  return {
    type: REQUEST_POSTS,
    substory
  }
}

function receivePosts(substory, json) {
  return {
    type: RECEIVE_POSTS,
    substory,
    posts: json.Data,
    receivedAt: Date.now()
  }
}

function fetchPosts(substory){
    return function(dispatch){
        dispatch(requestPosts(substory))
        let domain = 'http://weixin.chatu.com'
        let url = domain + '/api/article/getlist?pageindex=1&pagesize=10&categoryId=' + substory
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch( receivePosts(substory, json) ))
            .catch(error => {
                console.log(error)
            })
    }
}

function shouldFetchPosts(state, substory) {
  const posts = state.postsBySubstory[substory]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(substory) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), substory)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPosts(substory))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}




















