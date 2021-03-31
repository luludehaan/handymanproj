import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu>
      <Link to="/"><Menu.Item>Homepage</Menu.Item></Link>
      <Link to="/workers"><Menu.Item>Select A Handyman</Menu.Item></Link>
    </Menu>
  )
}

export default Navbar;