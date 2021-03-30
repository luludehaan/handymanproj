import { Component } from 'react';
import axios from 'axios';
import CommentForm from '../comments/CommentForm';
import Comments from '../comments/Comments';



// const Comment = ({ author, body, date, id}) => {
  
//   return (
    
//     <>
      
//       <h3>{author}</h3>
//       <h4>body: { body }</h4>
//       <p>{date}</p>
//     </>
//   )
// }
// export default Comment;

class Comment extends Component {
 
  state = { comment: [] }
    componentDidMount() {
      axios.get('/api/comment')
        .then( res => {
          this.setState({ comment: res.data })
        })
        .catch( err => console.log(err))
    }
  
    state = { editing: false }
    toggleForm = () => {
      const { editing } = this.state 
      this.setState({ editing: !editing })
    }
  
    
    render() {
      const { editing } = this.state
      const { id, author, body, date, deleteComment} = this.props
      return (
        <>
          
          <h5>author: {author}</h5>
          <h5>body: {body}</h5>
          <h5>date: {date}</h5>
          <br></br>
          <div>
          <button onClick={() => deleteComment(id)}>Delete Comment</button>
            {
            editing ? 
              <CommentForm 
                {...this.props}
                toggleForm={this.toggleForm}
              />
            :
              <button onClick={() => this.toggleForm()}>Edit Comment</button>
          }
         </div>
          
          <br />
        
            
        </>
      )
    }
  }
  export default Comment;
  
  
