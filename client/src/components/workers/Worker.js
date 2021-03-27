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
    const { id, name, title, experience,} = this.props.location.state
    return (
      <>
        <h1>{name}</h1>
        <p>Title: {title}</p>
        <p>Experience: {experience}</p>
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
      </>
    )
  }
}
export default Worker;