import React, { Component, PropTypes } from 'react';     
import { reduxForm, Field } from 'redux-form';           
import { createPost } from '../actions/index';           
import { Link } from 'react-router';                     
import { connect } from 'react-redux';                   

class PostsNew extends Component {
   
   static contextTypes = {
      router: PropTypes.object
   };

   onSubmit(values) { 
      
      this.props.createPost(values)
      .then(() => {
         
         this.context.router.push('/');
      });
   }

   render() {
      const { handleSubmit } = this.props;
      return(
         <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} className="form-horizontal">
            <h3>Create a new blog post</h3>
            <Field name="title" type="text" component={renderField} label="Title"/>
            <Field name="categories" type="text" component={renderField} label="Categories"/>
            <Field name="content" type="text" component={renderField} label="Content"/>
            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
         </form>
      );
   }
}


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor={name}>{label}</label>
    <div className="col-sm-10">
      <input {...input} placeholder={label} id={name} type={type} className={`form-control ${touched && error ? 'panel-danger' : ''}`}/>
      <div className="text-danger">
         { touched ? error : "" }
      </div>
    </div>
  </div>
)


function validate(values) {
   const errors = {};

   if ( !values.title ) {
      errors.title = 'Please supply a title for your blog post';
   }

   if ( !values.categories ) {
      errors.categories = "Please supply at least one category for the blog post";
   }

   if ( !values.content ) {
      errors.content = "Please supply a content for the blog post"
   }

   return errors;
}


PostsNew = reduxForm({
   form: 'PostsNewForm',
   validate
})(PostsNew);


PostsNew = connect(null, {createPost})(PostsNew);


export default PostsNew;

