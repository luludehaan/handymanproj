import { Component } from 'react';
import axios from 'axios';
import Service from './Service';
import ServiceForm from '../services/ServiceForm';

class Services extends Component {
  state = { services: [] }
  componentDidMount() {
    const { workerId } = this.props
    axios.get(`/api/workers/${workerId}/services`)
      .then( res => {
        this.setState({ services: res.data })
      })
      .catch( err => console.log(err))
  }
  addService = (service) => {
    const { workerId } = this.props
    axios.post(`/api/workers/${workerId}/services`, { service })
      .then( res => {
        const { services } = this.state 
        this.setState({ services: [...services, res.data ]})
      })
      .catch( err => console.log(err))
  }
  updateService = (id, workerId, service) => {
    axios.put(`/api/workers/${workerId}/services`, { service })
      .then( res => {
        const services = this.state.services.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        this.setState({ services })
      })
      .catch( err => console.log(err))
  }
  deleteService = (id) => {
    const { workerId } = this.props
    axios.delete(`/api/workers/${workerId}/services/${id}`)
      .then( res => {
        const { services } = this.state 
        this.setState({ services: services.filter( s => s.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { services } = this.state
    return (
      <>
        <h2>Services</h2>
        <h4>Add a Service</h4>
        <ServiceForm addService={this.addService} />
       <br></ br>
        { services.map( s => 
          <Service key={s.id} {...s} deleteService={this.deleteService} />
        )}
      </>
    )
  }
}
export default Services;
