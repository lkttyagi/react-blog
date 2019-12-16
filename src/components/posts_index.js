import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';     
import { Link } from 'react-router';               

class PostsIndex extends Component {

   componentWillMount() {
      this.props.fetchPosts();                     
   }

   
   renderBlogPosts() {
      return this.props.posts.map((post) => {
         return (
            <Link to={`posts/${post.id}`} className="list-group-item" key={post.id}>
               <span className="pull-right">{post.categories}</span>
               <strong>{post.title}</strong>
            </Link>
         );
      });
   }

   render () {
      return (
         <div>
            <div className="text-right">
               <Link to="/posts/new" className="btn btn-primary">New blog post</Link>
            </div>
            <h3>Blog posts</h3>
            <div className="list-group">
               {this.renderBlogPosts()}
            </div>
         </div>
      );
   }
}


function mapStateToProps(state) {
   
   return {
      posts: state.posts.all
   };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);


