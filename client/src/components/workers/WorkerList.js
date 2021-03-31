import Worker from "./Worker";
import { Grid } from "semantic-ui-react";
import {Back} from '../styledComponents/workerStyles';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <Back>
      <Grid>
        <Grid.Row columns={3}>
          {workers.map((w) => (
            <Grid.Column>
              <Worker
                key={w.id}
                {...w}
                deleteWorker={deleteWorker}
                updateWorker={updateWorker}
              />
              <br></br>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Back>
  );
};
export default WorkerList;
