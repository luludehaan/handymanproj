import { Component } from 'react';
import Services from '../services/Services';
import ServiceForm from '../services/ServiceForm';
import { Card, GridColumn, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
import { Grid } from 'semantic-ui-react'
import { MyButton, HH, Div, B } from '../styledComponents/serviceStyles';


  
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
      <B>
        
        <h5>Job: {job}</h5>
        <h5>Description: {description}</h5>
        <HH>Price: {price}</HH>
        <br></br>
        <Div>
        <MyButton onClick={() => deleteService(id)}>Delete Service</MyButton>
          {
          editing ? 
            <ServiceForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
            <MyButton onClick={() => this.toggleForm()}>Edit Service</MyButton>
        }
       </Div>
        
        <br />
      
          
      </B>
    )
  }
}
export default Service;























// import ServiceForm from '../services/ServiceForm';
// import Services from '../services/Services';

// const Service = ({ job, description, price, id, deleteService, updateService }) => {
  
//   //   state = { editing: false }
//   //   toggleForm = () => {
//   //   const { editing } = this.state 
//   //   this.setState({ editing: !editing })
//   // }
  
//   return (
    
//     <>
//       <h3>{job}</h3>
//       <h4>Price: { price }</h4>
//       <p>{description}</p>
//      {
//           // editing ? 
//           //   <ServiceForm 
//           //     {...this.props}
//           //     toggleForm={this.toggleForm}
//           //   />
//           // :
//           //   <button onClick={() => this.toggleForm()}>Edit</button>
          
//         }
//       <button onClick={() => deleteService(id)}>
//         Delete Service
//       </button>
//     </>
//   )
// }
// export default Service;