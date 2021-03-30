import { Component } from 'react';
import Services from '../services/Services';
import ServiceForm from '../services/ServiceForm';
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
  
class Service extends Component {
 
state = { service: [] }
  componentDidMount() {
    axios.get('/api/service')
      .then( res => {
        this.setState({ service: res.data })
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
    const { id, job, description, price, deleteService} = this.props
    return (
      <>
        
        <h5>Job: {job}</h5>
        <h5>Description: {description}</h5>
        <h5>Price: {price}</h5>
        <br></br>
        <button onClick={() => deleteService(id)}>Delete Service</button>
          {
          editing ? 
            <ServiceForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
            <button onClick={() => this.toggleForm()}>Edit Service</button>
        }
        <br />
      
          
      </>
    )
  }
}
export default Service;