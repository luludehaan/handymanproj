import { Component } from "react";
import {Button, Form, Icon} from 'semantic-ui-react';

class ServiceForm extends Component {
  state = { job: "", description: "", price: "" };

  componentDidMount() {
    if (this.props.id) {
      const { id, job, description, price } = this.props;
      this.setState({ id, job, description, price });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { updateService, id, toggleForm } = this.props;
      updateService(id, this.state);
      toggleForm();
    } else {
      this.props.addService(this.state);
    }
    this.setState({ job: "", description: "", price: "" });
  };
  render() {
    const { job, description, price } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
          required
          placeholder="Job"
        />
        <Form.TextArea
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
          required
          placeholder="Description"
        />
        <Form.Input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
          required
          placeholder="Price"
        />
        <Button type="submit"><Icon name="check"></Icon>Submit</Button>
      </Form>
    );
  }
}
export default ServiceForm;