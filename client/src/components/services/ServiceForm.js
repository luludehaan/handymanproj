import { Component } from 'react';

class ServiceForm extends Component {
  state = { job:"", description:"", price:"" }

  componentDidMount() {
    if (this.props.id) {
      const { id, job, description, price } = this.props 
      this.setState({ id, job, description, price })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateService, id, toggleForm } = this.props 
      updateService(id, this.state)
      toggleForm()
    } else {
      this.props.addService(this.state)
    }
    this.setState({ job:"", description:"", price:"", })
  }
  render() {
    const { job, description, price } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="job"
          value={job} 
          onChange={this.handleChange} 
          required
          placeholder="Job"
        />
        <input 
          type="text"
          name="description"
          value={description} 
          onChange={this.handleChange} 
          required
          placeholder="Description"
        />
        <input 
          type="text"
          name="price"
          value={price} 
          onChange={this.handleChange} 
          required
          placeholder="Price"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default ServiceForm;