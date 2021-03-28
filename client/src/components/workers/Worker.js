import { Component } from 'react';
import Services from '../services/Services';
import WorkerForm from '../workers/WorkerForm';
import { Card, Icon, Image } from 'semantic-ui-react';
  
export const styles = {
  titleHeader: {
    color: "white",
    textAlign: "center",
    background: "grey",
    fontSize: "40px",
  },
  eachDesc: {
    color: "blue",
    fontSize: "1.1em"
  }

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
            <MyButton onClick={() => this.toggleForm()}>Edit Handyman</MyButton>
          
        }
         <br />
        <h3>{name}'s Services</h3>
        <Services workerId={id} />
        </Card.Content>
        </Card>
      </>
    )
  }
}
export default Worker;