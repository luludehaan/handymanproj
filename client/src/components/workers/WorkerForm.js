import { Component } from 'react';

class WorkerForm extends Component {
  state = { name:"", title:"", experience:"" }

  componentDidMount() {
    if (this.props.id) {
      const { id, name, title, experience } = this.props 
      this.setState({ id, name, title, experience })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateWorker, id, toggleForm } = this.props 
      updateWorker(id, this.state)
      toggleForm()
    } else {
      this.props.addWorker(this.state)
    }
    this.setState({ name:"", title:"", experience:"", })
  }
  render() {
    const { name, title, experience } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="name"
          value={name} 
          onChange={this.handleChange} 
          required
          placeholder="Name"
        />
        <input 
          type="text"
          name="title"
          value={title} 
          onChange={this.handleChange} 
          required
          placeholder="Title"
        />
        <input 
          type="text"
          name="experience"
          value={experience} 
          onChange={this.handleChange} 
          required
          placeholder="Experience"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default WorkerForm;