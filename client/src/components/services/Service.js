import { Component } from "react";
import ServiceForm from "../services/ServiceForm";
import { Button, Icon } from "semantic-ui-react";
import axios from "axios";

class Service extends Component {
  state = { service: [] };
  componentDidMount() {
    axios
      .get("/api/service")
      .then((res) => {
        this.setState({ service: res.data });
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
    const { id, job, description, price, deleteService } = this.props;
    return (
      <>
        <h5>Job: {job}</h5>
        <h5>Description: {description}</h5>
        <h5>Price: {price}</h5>
        <br></br>
        <Button
          color="red"
          size="mini"
          onClick={() => deleteService(id)}><Icon name="trash"></Icon>
          Delete Service
        </Button>
        {editing ? (
          <ServiceForm {...this.props} toggleForm={this.toggleForm} />
        ) : (
          <Button
            size="mini"
            onClick={() => this.toggleForm()}><Icon name="edit"></Icon>
            Edit Service
          </Button>
        )}
        <br />
      </>
    );
  }
}
export default Service;