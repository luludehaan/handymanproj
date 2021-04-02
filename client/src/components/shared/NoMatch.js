import { Link } from 'react-router-dom';
import handyman404 from '../images/handyman404.jpg';

const NoMatch = () => {
  return (
    <>
      <div>
        <img src={handyman404} alt="404: Sorry, this page can't be found." />
      </div>
      <Link to='/'>
        Return Home
      </Link>
      
    </>
  )
}
export default NoMatch;