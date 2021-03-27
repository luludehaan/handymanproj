import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <>
      <h1>404: Sorry, this page can't be found.</h1>
      <Link to='/'>
        Return home
      </Link>
    </>
  )
}
export default NoMatch;