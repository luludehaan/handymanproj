import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Workers from './components/workers/Workers';
import Worker from './components/workers/Worker';
import { Container } from 'semantic-ui-react';
const App = () => (
  <>
    <Navbar /> 
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/workers" component={Workers} />
        <Route exact path="/workers/:id" component={Worker} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/comments" component={Comments} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;