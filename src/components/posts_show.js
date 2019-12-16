import React, { Component, PropTypes } from 'react';              
import { connect } from 'react-redux';                            
import { fetchPost, deletePost } from '../actions/index';         
import { Link } from 'react-router';                              

class PostsShow extends Component {

   
   static contextTypes = {
      router: PropTypes.object
   };

   componentWillMount() {
      this.props.fetchPost(this.props.params.id);      
   }

   
   onDeleteClick() {
      
      this.props.deletePost(this.props.post.id)
         .then(() => { this.context.router.push('/'); });
   }

   render() {
      const { post } = this.props;

      if (!post) {
         return <div>Fetching blog post content...</div>
      }

      return (
         <div>
            <Link to="/">Back to the blog post index</Link>
            <button
               onClick={ this.onDeleteClick.bind(this) }
               className="btn btn-danger pull-right">
               Delete blog post
            </button>
            <h3>{post.title}</h3>
            <h4>Categories: {post.categories}</h4>
            <p>{post.content}</p>
         </div>
      );
   }
}


function mapStateToProps(state) {
   
   return {
      post: state.posts.post
   }
}

export default connect( mapStateToProps, { fetchPost, deletePost } )( PostsShow );
