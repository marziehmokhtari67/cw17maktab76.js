import React, { Component } from 'react';
class Comments extends Component {
    state = {  } 
    render() { 
      // const currentComment=this.props.comments
      // console.log(currentComment);
        return (
          <>
            <h5 style={{margin:'5px'}}>Comments:</h5>
            {this.props.comments.map(comment=><p style={{fontSize:'0.8rem'}}>{comment.body}</p>)}
          </>
        );
    }
}
 
export default Comments;