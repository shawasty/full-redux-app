import { connect } from "react-redux";
import { fetchPosts } from '../actions/postsActions'
import { useEffect } from "react";
import  Post  from  '../components/Post'

const PostsPage =({dispatch, loading, posts, hasErrors })=>{
    useEffect(()=>{
        
        dispatch(fetchPosts())

    },[dispatch])
    console.log('effect', posts)
// create a function that displays all the three componenets

//the following will show loading, error or success state

const renderPosts = ()=> {
    if (loading) return <p>Loading posts....</p>
    if (hasErrors) return <p>Unable to display posts</p>
    return posts.map((post)=> <Post key={post.id} post={post}/>)
}
renderPosts()
console.log('trying',renderPosts())

    return(
        <section>
            <h1>Posts</h1>

            {renderPosts()}
          
           
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