import {Link} from 'react-router-dom';
import {Img, Icons, Footer, Btn, Body} from '../styledComponents/homeStyles';
import { List, Menu } from 'semantic-ui-react';
const Home = () => {
  return (
    <Body>
    <header>
      <Img src="https://images.unsplash.com/photo-1454694220579-9d6672b1ec2a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZHltYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"></Img>
    </header>
    
      <h1>HandyHome</h1>
      <h4>Welcome. Please select a handyman, service, or provide commentary on your experience.</h4>
      <Link to="/workers"><Btn>Start Here!</Btn></Link>
    <Footer>
    <h1>Contact Info</h1>
      <List> 
    <List.Item>
      <List.Icon name='users' />
      <List.Content>Team SLB</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>America!</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:teamSLB@gmail.com'>teamSLB@gmail.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.semantic-ui.com'>www.teamslbworkers.com</a>
      </List.Content>
    </List.Item>
  </List>
  <div>
    <h2>Connect With Us</h2>
  <Icons circular size='big' name='facebook' />
  <Icons circular size='big' name='twitter' />
  <Icons circular size='big' name='instagram' />
  <Icons circular size='big' name='slack' />
  </div>
    </Footer>
    </Body>
  )
}

export default Home;