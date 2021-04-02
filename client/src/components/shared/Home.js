import {Link} from 'react-router-dom';
import {Img, H1, Icons, Footer, Btn, Btn1, Body, Divpad, Icon1} from '../styledComponents/homeStyles';
import { List } from 'semantic-ui-react';
import handyhome from '../images/handyhome.jpg';
const Home = () => {
  return (
    <Body>
      <header>
        <div>
          <Img src={handyhome} alt="homepage" />
        </div>
      </header>

      <H1>HandyHome</H1>
      <Divpad>
        <h4>
          Welcome. Please select a handyman, service, or provide commentary on
          your experience.
        </h4>
        <Link to="/workers">
          <Btn1>Start Here!</Btn1>
        </Link>
      </Divpad>
      <Footer>
        <h1>Contact Info</h1>
        <List>
          <List.Item>
            <List.Content>
              {" "}
              <Icon1 name="users" />
              Team SLB
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Icon1 name="marker" />
              America!
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <a href="mailto:teamSLB@gmail.com">
                <Icon1 name="mail" />
                teamSLB@gmail.com
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <a href="http://www.semantic-ui.com">
                <Icon1 name="linkify" />
                www.teamslbworkers.com
              </a>
            </List.Content>
          </List.Item>
        </List>

        <div>
          <h2>Connect With Us</h2>
          <Icons circular size="big" name="facebook" />
          <Icons circular size="big" name="twitter" />
          <Icons circular size="big" name="instagram" />
          <Icons circular size="big" name="slack" />
        </div>
      </Footer>
    </Body>
  );
}

export default Home;