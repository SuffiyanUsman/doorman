import React , { useContext,useState } from 'react'
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
  Head,
  Label,
} from "./common";

function WorkerRegister() {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [gender,setGender] = useState('');
    const [workerType,setWorkerType] = useState('');
    const [experience,setExperience] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAddress] = useState('');

    const workersCollectionRef = collection(db,"workers");
    const auth = getAuth();
  const submitHandle = async (e)=>{
    e.preventDefault();
    let correct_way = /^[A-Za-z]+$/;

    if(!firstName || !lastName|| !email || !password || !workerType || !gender ){
        alert('Fill All the input field')
    
    }
    else if(!firstName.match(correct_way)){
        alert('FirstName must be letters only')
    }
    else if(!lastName.match(correct_way)){
        alert('LastName must be letters only')
    }
    // else if(isNaN(contact)){
    //     alert('please contact number must be digits only')

    // }
    else if(password.length <= 6 || password.length >=14){
        alert('password must be 7 digit to 14 digit')
    }

    else{

        await addDoc(workersCollectionRef,{firstName:firstName, lastName:lastName , email: email , password: password , gender: gender , 
            workerType:workerType  })
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
            alert("Registration successful")
        }
}
    return (
            <BoxContainer className='container' style={{width:'500px'}}>
                <div className="worker-form" style={{border:'1px solid lightgray'}}>
                 <Head>Worker Registration Form</Head>
                    <div className="formData" >
                    <div>
                        <Label>First name</Label>
                        <Input type="text"  placeholder="First name" onChange={(e)=>setFirstName(e.target.value)} />
                    </div>

                    <div>
                        <Label>Last name</Label>
                        <Input type="text"  placeholder="Last name" onChange={(e)=>setLastName(e.target.value)} />
                    </div>
                    <div>
                        <Label>Email address</Label>
                        <Input type="email"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                    </div>     
                    <div>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>  
                    <div>
                        <Label>Confirm Password</Label>
                        <Input type="password" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)} />
                    </div>  
                
                    {/* <div className="form-group">
                        <Label>Contact No</Label>
                        <Input type="text" placeholder="Contact No"  onChange={(e)=>setContact(e.target.value)}/>
                    </div> */}

                {/* <div className="form-group">
                    <Label>Gender</Label>
                    
                    <div className="custom-control custom-checkbox">
                        <Input type="checkbox" className="custom-control-Input" id="customCheck1" />
                        <Label className="custom-control-Label" htmlFor="customCheck1">Male</Label>
                        <Input type="checkbox" className="custom-control-Input" id="customCheck1" />
                        <Label className="custom-control-Label" htmlFor="customCheck1">Female</Label>
                    </div>
                </div> */}

                    <div>
                        <Label htmlFor="Gender" style={{marginLeft:''}}>Gender</Label>
                        <Select onChange={(e)=>setGender(e.target.value)}>
                            <Option disabled selected>Gender</Option>
                            <Option>Male</Option>
                            <Option>Female</Option>
                        </Select>
                    {/* <Input type="text" className="form-control" placeholder="Worker Type" /> */}
                    </div>
                    <div>
                        <Label htmlFor="Worker Type" style={{marginRight:''}}>Worker Type</Label>
                        <Select onChange={(e)=>setWorkerType(e.target.value)} >
                            <option disabled selected>Worker Type</option>
                            <option>Plumber</option>
                            <option>Electrician</option>
                            <option>Mechanic</option>
                            <option>Painter</option>
                        </Select>
                    {/* <Input type="text" className="form-control" placeholder="Worker Type" /> */}
                    </div>

                    {/* <div>
                        <Label style={{marginRight:'140px'}}>Experience</Label>
                        <Select type="text" placeholder="Experience" onChange={(e)=>setExperience(e.target.value)}>
                        <option disabled selected>Experience</option>
                        <option>1-Year</option>
                        <option>2-Years</option>
                        <option>5-Years</option>
                        <option>6 or More</option>
                        </Select>
                    </div> */}

                    
                    </div>

                    <SubmitButton type="submit" style={{marginTop: "20px",textAlign:'center'}} className="btn" onClick={submitHandle} >
                        Submit
                    </SubmitButton>
                    <p style={{textAlign:'center'}}>
                        Already registered <Link to ="/"> sign in? </Link>
                    </p>
                    </div>
                </BoxContainer>
            
    )
}

export default WorkerRegister
