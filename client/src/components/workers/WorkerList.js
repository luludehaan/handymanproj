import { Link } from 'react-router-dom';
import Worker from './Worker';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      {
        workers.map( w => 
          <>
            <Worker
          key={w.id}
          {...w}
          deleteWorker={deleteWorker}
          updateWorker={updateWorker}
          
        />
            <br />
           
          </>
        )
      }
    </>
  )
}
export default WorkerList;