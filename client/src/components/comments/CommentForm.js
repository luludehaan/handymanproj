import { Component } from "react";

class CommentForm extends Component {
  state = { author: "", body: "", date: "" };

  componentDidMount() {
    if (this.props.id) {
      const { id, author, body, date } = this.props;
      this.setState({ id, author, body, date });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateComment, id, toggleForm } = this.props;
      updateComment(id, this.state);
      toggleForm();
    } else {
      this.props.addComment(this.state);
    }
    this.setState({ author: "", body: "", date: "" });
  };
  render() {
    const { author, body, date } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="author"
          value={author}
          onChange={this.handleChange}
          required
          placeholder="Author"
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.handleChange}
          required
          placeholder="Text"
        />
        <input
          type="text"
          name="date"
          value={date}
          onChange={this.handleChange}
          required
          placeholder="Date"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default CommentForm;
