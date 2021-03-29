import { Component } from 'react';
import Services from '../services/Services';
import WorkerForm from '../workers/WorkerForm';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {MyButton, Spacing} from '../styledComponents/workerStyles';

export const styles = {
cards: {
  border: "1px solid black",
  boxShadow: "0px 0px 10px black",
},

}
  
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
      <Spacing>
        <Card style={ styles.cards }>
          <Card.Content>
            <Card.Header >Name: {name}</Card.Header>
            <Card.Meta>Title: {title}</Card.Meta>
            <Card.Description>Experience: {experience}</Card.Description>
            <br></br>
        <MyButton onClick={() => deleteWorker(id)}>Delete Handyman</MyButton>
          {
          editing ? 
            <WorkerForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
            <MyButton onClick={() => this.toggleForm()}>Edit Handyman</MyButton>
          
        }
        <br />
          <Services workerId={id} />
          </Card.Content>
          </Card>
      </Spacing>
    )
  }
}
export default Worker;