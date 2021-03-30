import { Component } from 'react';
import axios from 'axios';
import CommentForm from '../comments/CommentForm';
import Comment from '../comments/Comment';

class Comments extends Component {
  state = { comments: [] }
  componentDidMount() {
    const { serviceId } = this.props
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => {
        this.setState({ comments: res.data })
      })
      .catch( err => console.log(err))
  }
  addComment = (comment) => {
    const { serviceId } = this.props
    axios.post(`/api/services/${serviceId}/comments/`, { comment })
      .then( res => {
        const { comments } = this.state 
        this.setState({ comments: [...comments, res.data ]})
      })
      .catch( err => console.log(err))
  }
  deleteComment = (id) => {
    const { serviceId } = this.props
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        const { comments } = this.state 
        this.setState({ comments: comments.filter( c => c.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { comments } = this.state
    return (
      <>
        <h1>Add Comment</h1>
        <CommentForm addComment={this.addComment} />
        { comments.map( c => 
          <CommentForm key={c.id} {...c} deleteComment={this.deleteComment} />
        )}
      </>
    )
  }
}
export default Comments;