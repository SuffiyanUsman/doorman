import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WorkerRegister from "./components/accountBox/WorkerRegister";
import Home from "./components/accountBox/Home";
import Thankyou from "./components/accountBox/Thanks";
import User from './components/accountBox/user'
import { LoginForm } from "./components/accountBox/loginForm";
import UserRegister from "./components/accountBox/UserRegister";
import './style/style.css';
import Nav from './components/header/Nav';

import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = ()=>{
  return ( <Router>
        {/* <div className="header-in">
          <label style={{fontSize:20,}}>The Door Man</label>
              <li className="nav-item">
                <Link className="navlink" to={"UserRegister"}>User Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="navlink" to={"/WorkerRegister"}>Worker Registrartion</Link>
              </li>
        </div> */}
        <Nav />
    <AuthProvider>
      <Switch>
          
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route path="/UserRegister">
            <UserRegister />
          </Route>
          <Route path="/WorkerRegister">
            <WorkerRegister />
          </Route>
          <Route path="/thankyou">
            <Thankyou />
          </Route>
           <Route path="/user">
            <User />
          </Route>
          <PrivateRoute path="/" component={(props) => <Home {...props} /> } />
       
        </Switch> 
        </AuthProvider>
    </Router>
      
  );
}

export default App;