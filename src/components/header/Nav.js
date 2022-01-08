import React from 'react'
import { Link} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {useHistory} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../config'

function Nav() {

//  const {logout} = useAuth();

 const history = useHistory();

  // const handleLogout=()=>{
  //   logout();
  //   history.push('/login')
  // }

    return (
        <div className="header-in">
          <Link to="/" style={{fontSize:'27px',color:'mediumslateblue',fontWeight:'bolder',color:'white',textDecoration:'none'}}>The Door Man</Link>
              {/* <li className="nav-item" style={{marginRight:'300px'}}>
                <Link to={"UserRegister"}>User Registration</Link>
              </li>
              <li className="nav-item" style={{marginRight:'100px'}}>
                <Link to={"/WorkerRegister"}>Worker Registrartion</Link>
              </li> */}
              <li className="nav-item" style={{marginLeft:'85%',cursor:'pointer',marginBottom:'0px',height:'30px',marginTop:'-35px'}}>
                <button onClick={async e => {
                  e.preventDefault()
                  signOut(auth);
                  history.push('/login')
                }}>logOut</button>
              </li>
        </div>
    )
}

export default Nav;
