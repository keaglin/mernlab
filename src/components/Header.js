import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col } from 'react-materialize'

const Header = () => {
  return(
    <Row>
      <header>
        <nav>
          <div className="nav-wrapper green darken-1">
            <Link to="/" className="brand-logo center">Family Book</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/">About</Link></li> */}
              <li><Link to="/people">People</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </Row>
  )
}

export default Header