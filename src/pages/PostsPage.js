import { connect } from "react-redux";
import { fetchPosts } from '../actions/PostsActions'
import { useEffect } from "react";
import { Post } from  '../components/Post'

const PostsPage =({dispatch, loading, posts, hasErrors })=>{
    useEffect(()=>{
        dispatch(fetchPosts())

    },[dispatch])
// create a function that displays all the three componenets

//the following will show loading, error or success state

const renderPosts = ()=> {
    if (loading) return <p>Loading posts....</p>
    if (hasErrors) return <p>Unable to display posts</p>
    return posts.map((post)=> <Post key={post.id} post={post}/>)
}

    return(
        <section>
            <h1>Posts</h1>
        </section>
    )
}

// we must bring in connect
// connect is a higher order function that connects the redux store to react component

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts:state.posts.posts,
    hasErrors:state.posts.hasErrors,
})
export default connect (mapStateToProps)(PostsPage)