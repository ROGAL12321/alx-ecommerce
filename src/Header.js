import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <Link to="/">
        <h1>Ecommerce Demo</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header