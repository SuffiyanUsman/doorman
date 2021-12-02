import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {db} from '../../config';

import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  Option,
  MutedLink,
  HeaderText,
  SubmitButton,
  Select,
  Span,
  Head,
  Label,
} from "./common";

function UserRegister() {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const usersCollectionRef = collection(db,"users");

const auth = getAuth();
  const submitHandle = async (e)=>{
    e.preventDefault();
      await addDoc(usersCollectionRef,{firstName:firstName, lastName:lastName , email: email , password: password})
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      // ...
    })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
    return (
        <div style={{}}>
            <BoxContainer className='container' style={{width:'500px'}}>
                <FormContainer className="user-form">
                 <Head>User Registratiion</Head>
                <div>
                    <Label>First name</Label>
                    <Input type="text"  placeholder="First name" onChange={(e)=>setFirstName(e.target.value)} />
                </div>

                <div>
                    <Label>Last name</Label>
                    <Input type="text" placeholder="Last name" onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div>
                    <Label>Email address</Label>
                    <Input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </div>  
                <div>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                </div>  
                <div>
                    <Label>Confirm Password</Label>
                    <Input type="password" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                </div>  
                
                {/* <div className="form-group"> */}
                    {/* <Label htmlFor="Gender">Gender</Label> */}
                    {/* <select className="form-control"> */}
                        {/* <option>Male</option> */}
                        {/* <option>Female</op/</form>tion> */}

                    {/* </select> */}
                    {/* <Input type="text" className="form-control" placeholder="Worker Type" /> */}
                {/* </div> */}


                             

                <SubmitButton type="submit"style={{margin: "40px auto"}} className='btn' onClick={submitHandle} >Submit</SubmitButton>
                <p>
                    Already registered <Link to ='/'>sign in?</Link>
                </p>
                </FormContainer>
            </BoxContainer>
        </div>
    )
}

export default UserRegister
