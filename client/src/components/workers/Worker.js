import { Component } from 'react';
import Services from '../services/Services';
import WorkerForm from '../workers/WorkerForm';
import { Card, Grid, GridColumn, Icon, Image } from 'semantic-ui-react';
  
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
    
        
     <Grid columns='4'>
       <Grid.Row rows='3'>
       <Grid.Column width={8}>
      <Card>
      
        <Card.Content>
        <Card.Header style={ styles.titleHeader }>{name}</Card.Header>
        <p>Title: {title}</p>
        <Card.Description style={ styles.eachDesc }>Experience: {experience}</Card.Description>
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
        </Card.Content>
        
        </Card>

        </Grid.Column>
        </Grid.Row>
        </Grid>
      </>
    )
  }
}
export default Worker;