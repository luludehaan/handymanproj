import { Component } from 'react';
import Services from '../services/Services';
import WorkerForm from '../workers/WorkerForm';
  
class Worker extends Component {
 
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
        <h3>Name: {name}</h3>
        <p>Title: {title}</p>
        <p>Experience: {experience}</p>
        <button onClick={() => deleteWorker(id)}>Delete Handyman</button>
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
        <h3>{name}'s Services</h3>
        <Services workerId={id} />
      </>
    )
  }
}
export default Worker;