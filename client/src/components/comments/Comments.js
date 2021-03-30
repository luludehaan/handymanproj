import { Component } from "react";
import axios from "axios";
import CommentForm from "../comments/CommentForm";
import Comment from "../comments/Comment";

class Comments extends Component {
  state = { comments: [] };

  componentDidMount() {
    const { serviceId } = this.props;
    axios
      .get(`/api/services/${serviceId}/comments`)
      .then((res) => {
        this.setState({ comments: res.data });
      })
      .catch((err) => console.log(err));
  }
  addComment = (comment) => {
    const { serviceId } = this.props;
    axios
      .post(`/api/services/${serviceId}/comments/`, { comment })
      .then((res) => {
        const { comments } = this.state;
        this.setState({ comments: [...comments, res.data] });
      })
      .catch((err) => console.log(err));
  };
  updateComment = (id, comment) => {
    const { serviceId } = this.props;
    axios
      .put(`/api/services/${serviceId}/comments/${id}`, { comment })
      .then((res) => {
        const comments = this.state.comments.map((c) => {
          if (c.id === id) {
            return res.data;
          }
          return c;
        });
        this.setState({ comments });
      })
      .catch((err) => console.log(err));
  };
  deleteComment = (id) => {
    const { serviceId } = this.props;
    axios
      .delete(`/api/services/${serviceId}/comments/${id}`)
      .then((res) => {
        const { comments } = this.state;
        this.setState({ comments: comments.filter((c) => c.id !== id) });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { comments } = this.state;
    return (
      <>
        <h2>Comments</h2>
        <h4>Add a Comment</h4>
        <CommentForm addComment={this.addComment} />
        <br></br>
        {comments.map((c) => (
          <Comment
            key={c.id}
            {...c}
            deleteComment={this.deleteComment}
            updateComment={this.updateComment}
          />
        ))}
      </>
    );
  }
}
export default Comments;
