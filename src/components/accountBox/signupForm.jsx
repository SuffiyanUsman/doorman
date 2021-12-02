import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import fire from '../../config';
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import {
  Link
} from "react-router-dom";



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  
  
  const auth = getAuth();
  const submitHandle = async (e)=>{
    e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
  return (
    <BoxContainer>
      <FormContainer onSubmit={(e)=>submitHandle(e)} style={{marginTop:120,marginLeft:50}}>
       
      <SubmitButton type="submit">user</SubmitButton>
      <SubmitButton type="submit"><Link to="WorkerRegister">worker</Link></SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
