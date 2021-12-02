import React from 'react'
import { Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="header-in">
          <Link to="/" style={{fontSize:'27px',color:'mediumslateblue',fontWeight:'bolder',color:'white',textDecoration:'none'}}>The Door Man</Link>
              <li className="nav-item" style={{marginRight:'300px'}}>
                <Link to={"UserRegister"}>User Registration</Link>
              </li>
              <li className="nav-item" style={{marginRight:'100px'}}>
                <Link to={"/WorkerRegister"}>Worker Registrartion</Link>
              </li>
              <li className="nav-item" style={{marginRight:'20px'}}>
                <Link to={"/WorkerRegister"}>logOut</Link>
              </li>
        </div>
    )
}

export default Nav;
