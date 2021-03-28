import { Component } from 'react';
import Services from '../services/Services';
import WorkerForm from '../workers/WorkerForm';
import { Card, Icon, Image } from 'semantic-ui-react';
  
class Worker extends Component {
 
  state = { editing: false }
  toggleForm = () => {
    const { editing } = this.state 
    this.setState({ editing: !editing })
  }

  
  render() {
    const { editing } = this.state
    const { id, name, title, experience,} = this.props.location.state
    return (
      <>
      <Card>
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <p>Title: {title}</p>
        <Card.Description>Experience: {experience}</Card.Description>
          {
          editing ? 
            <WorkerForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <button onClick={() => this.toggleForm()}>Edit</button>
        }
         <br />
        <h1 >Services</h1>
        <hr></hr>
        <Services workerId={id} />
        </Card.Content>
        </Card>
      </>
    )
  }
}
export default Worker;