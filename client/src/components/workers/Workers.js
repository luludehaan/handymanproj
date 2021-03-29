import { Component } from 'react';
import axios from 'axios';
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';
import {Div, H1, H2, H3, Form1 } from '../styledComponents/workerStyles';

class Workers extends Component {
  state = { workers: [] }
  componentDidMount() {
    axios.get('/api/workers')
      .then( res => {
        this.setState({ workers: res.data })
      })
      .catch( err => console.log(err))
  }
  addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => {
        const { workers } = this.state 
        this.setState({ workers: [ ...workers, res.data ]})
      })
      .catch( err => console.log(err))
  }
  updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker })
      .then( res => {
        const workers = this.state.workers.map( w => {
          if (w.id === id) {
            return res.data
          }
          return w
        })
        this.setState({ workers })
      })
      .catch( err => console.log(err))
  }
  deleteWorker = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        const { workers } = this.state 
        this.setState({ workers: workers.filter( w => w.id !== id )})
      })
      .catch( err => console.log(err))
  }
  render() {
    const { workers } = this.state
    return (
      <Div>
        <H1>Workers</H1>
        <H3>Add a Handyman</H3>
        <Form1>
        <WorkerForm addWorker={this.addWorker} />
        </Form1>
        <H2>Available Handymen</H2>
        <WorkerList
          workers={workers}
          deleteWorker={this.deleteWorker}
          updateWorker={this.updateWorker}/>
      </Div>
    )
  }
}
export default Workers;