import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  Span,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import fire from '../../config';
import { getAuth ,signInWithEmailAndPassword  } from "firebase/auth";
import {
  Link,
  useHistory
} from "react-router-dom";
import '../../style/style.css';
import logo from '../../images/logo.PNG';
import Home from './Home';


export function LoginForm(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // const { switchToSignup } = useContext(AccountContext);
  let history = useHistory(); 
  function home(){
    history.push('/home');
  }
  
  const auth = getAuth();
  const submitHandle = async (e)=>{
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    if(user){
      return home();
    }
  })
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
 });
  
}

  return (
    <BoxContainer className='container'>
    <FormContainer className="form" style={{}} onSubmit={(e)=>submitHandle(e)}>
      <img src={logo}  className='logo' alt="" />
      <Input type="email" placeholder="Email" style={{margin:'15px auto'}} onChange={(e)=>setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" style={{margin:'15px auto'}} onChange={(e)=>setPassword(e.target.value)} />
    <SubmitButton type="submit" style={{margin:'15px auto',height:'40px',width:'320px'}} onClick={submitHandle}>Signin</SubmitButton>
    
    {/* <Marginer direction="vertical" margin={10} /> */}
    <MutedLink href="#">Forget your password?</MutedLink>
    {/* <Marginer direction="vertical" margin="1.6em" /> */}
    {/* <Marginer direction="vertical" margin="1em" /> */}
    
      <Span > Don't have an accoun?</Span><br/>
      {/* <BoldLink href="#" onClick={switchToSignup}> */}
      <MutedLink href="#">
      <Link to ="/UserRegister"> <SubmitButton className="registerBtn" type="submit">User</SubmitButton></Link> 
      <Link to="/WorkerRegister"><SubmitButton className="registerBtn" type="submit">Worker</SubmitButton></Link>
      {/* </BoldLink> */}
      
    </MutedLink>
    </FormContainer>
  </BoxContainer>
  );
}