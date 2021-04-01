import { Component } from "react";
import Services from "../services/Services";
import WorkerForm from "../workers/WorkerForm";
import Comments from "../comments/Comments";
import { Card, Icon, Button } from "semantic-ui-react";
import {MyButton, Spacing} from '../styledComponents/workerStyles';
import { Link } from "react-router-dom";
import axios from "axios";

class Worker extends Component {
  state = { worker: [] };
  componentDidMount() {
    axios
      .get("/api/worker")
      .then((res) => {
        this.setState({ worker: res.data });
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
    const { id, name, title, experience, deleteWorker } = this.props;
    return (
      <>
      <Spacing>
        <Card>
          <Card.Content>
            <Card.Header>
              {/* <Link
                to={{
                  pathname: `/workers/${id}`,
                }}
              > */}
                {name}
              {/* </Link> */}
            </Card.Header>
            <Card.Meta>Title: {title}</Card.Meta>
            <Card.Description>Experience: {experience}</Card.Description>
            <br></br>
            <Button size="mini" color="red" onClick={() => deleteWorker(id)}><Icon name="trash"></Icon>Delete Handyman</Button>
            {editing ? (
              <WorkerForm {...this.props} toggleForm={this.toggleForm} />
            ) : (
              <Button size="mini" onClick={() => this.toggleForm()}><Icon name="edit"></Icon>Edit Handyman</Button>
            )}
            <br />
            <Services workerId={id} />
            <Comments serviceId={id} />
          </Card.Content>
        </Card>
      </Spacing>
      </>
    );
  }
}
export default Worker;
