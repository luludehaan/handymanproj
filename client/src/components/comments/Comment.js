import { Component } from "react";
import axios from "axios";
import CommentForm from "../comments/CommentForm";
import { Button } from "semantic-ui-react";

class Comment extends Component {
  state = { comment: [] };
  componentDidMount() {
    axios
      .get("/api/comment")
      .then((res) => {
        this.setState({ comment: res.data });
      })
      .catch((err) => console.log(err));
  }

  state = { editing: false };
  toggleForm = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  render() {
    const { editing } = this.state;
    const { id, author, body, date, deleteComment } = this.props;
    return (
      <>
        <h5>author: {author}</h5>
        <h5>body: {body}</h5>
        <h5>date: {date}</h5>
        <br></br>
        <div>
          <Button
            color="red"
            size="mini"
            onClick={() => deleteComment(id)}>
            Delete Comment
          </Button>
          {editing ? (
            <CommentForm {...this.props} toggleForm={this.toggleForm} />
          ) : (
              <Button
                size="mini"
                onClick={() => this.toggleForm()}>
              Edit Comment
            </Button>
          )}
        </div>
        <br />
      </>
    );
  }
}
export default Comment;
