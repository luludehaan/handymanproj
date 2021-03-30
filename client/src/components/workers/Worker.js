import { Component } from 'react';
import Services from '../services/Services';
import WorkerForm from '../workers/WorkerForm';
import Comments from '../comments/Comments'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

  
class Worker extends Component {
   state = { worker: [] }
  componentDidMount() {
    axios.get('/api/worker')
      .then( res => {
        this.setState({ worker: res.data })
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
    const { id, name, title, experience, deleteWorker} = this.props
    return (
      <>
        <Card>
          <Card.Content>
            <Card.Header>Name: {name}</Card.Header>
            <Card.Meta>Title: {title}</Card.Meta>
            <Card.Description>Experience: {experience}</Card.Description>
            <br></br>
        <button onClick={() => deleteWorker(id)}>Delete Handyman</button>
          {
          editing ? 
            <WorkerForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
            <button onClick={() => this.toggleForm()}>Edit Handyman</button>
          
        }
        <br />
            <Services workerId={id} />
            <Comments serviceId={id} />
          </Card.Content>
          </Card>
      </>
    )
  }
}
export default Worker;