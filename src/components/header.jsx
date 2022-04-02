

const Header = () => {
  
  return (
    <div className="container-fluid">

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signin">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Book Tickets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link float-e" href="/signin">Logout</a>
          </li>

        </ul>
      </nav>


    </div>


  )
}

export default Header