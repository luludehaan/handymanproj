import { Link } from 'react-router-dom';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      {
        workers.map( w => 
          <>
            <Link
              to={{
                pathname: `/workers/${w.id}`,
                state: { ...w }
              }}>
              {w.name}
            </Link>
            <br />
            <button onClick={() => deleteWorker(w.id)}>Delete</button>
            <br />
            <br />
            <br />
          </>
        )
      }
    </>
  )
}
export default WorkerList;