import { Link } from 'react-router-dom';
import Worker from './Worker';
import { Grid } from 'semantic-ui-react'

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      <Grid>
        <Grid.Row columns={3}>
           
      {
            workers.map(w =>
          
              <Grid.Column>
                
          <Worker
          key={w.id}
          {...w}
          deleteWorker={deleteWorker}
          updateWorker={updateWorker}
          />
        <br></br>
         </Grid.Column>
          
<<<<<<< HEAD
=======
        />
            <br />
           
          </>
>>>>>>> d17462c (styling)
        )
            }
            
          </Grid.Row>
        </Grid>
    </>
  )
}
export default WorkerList;