import { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import Clearable from "./Stars";

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
      <Form onSubmit={this.handleSubmit}>
        <Clearable></Clearable>
        <Form.Input
          type="text"
          name="author"
          value={author}
          onChange={this.handleChange}
          required
          placeholder="Author"
        />
        <Form.TextArea
          type="text"
          name="body"
          value={body}
          onChange={this.handleChange}
          required
          placeholder="Text"
        />
        <Form.Input
          type="text"
          name="date"
          value={date}
          onChange={this.handleChange}
          required
          placeholder="Date"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
export default CommentForm;
