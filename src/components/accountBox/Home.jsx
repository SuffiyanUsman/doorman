import React , { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
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
import {useHistory} from 'react-router-dom'

import {db} from '../../config'
import {collection,addDoc,doc} from 'firebase/firestore'

const initialState = {
    workerName:"",
    city:'',
    area:'',
    contact:'',
    address:'',
    domain:'',
    workingField:'',
    experience:'',
    shopaddress:'',
    openingTime:'',
    closingTime:"",

}




function Home(){

  const [state,setState] = useState(initialState);
  
  const  history = useHistory();
  const {workerName,city,area,contact,address,domain,workingField,experience,shopaddress,openingTime,closingTime} = state;
  
  
  const workerProfileCollectionRef = collection(db,'WorkerProfile');


  const handleInputChange  = (e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value})
  }
  
  const handleSubmit = async(e)=>{
      e.preventDefault();

      if(!workerName || !city || !area || !contact || !address || !domain  || !experience || !openingTime || !closingTime){
          alert('Please Provide all input Field ')
      }
      else{
          try{
              await addDoc(workerProfileCollectionRef,state);
              alert('data added successfully')
              history.push('/thankyou');
          }
          catch(error){
              alert(error)
          }
      }
  }


    return(
        
        <div>
            <div className='container'>
            <form onSubmit={handleSubmit}>    
                <Head style={{fontSize:'60px'}}>Worker Profile</Head>
                <div className="form-detal">
                    <h1> Personal Information</h1>
                <div>
                    <Label>Worker Name</Label>
                    <Input type="text"  placeholder="Worker Name" name='workerName' value={workerName} onChange={handleInputChange} />
                </div>

                <div>
                    <Label>City</Label>
                    <Input type="text" placeholder="City" name='city' value={city} onChange={handleInputChange} />
                </div>
                <div>
                    <Label>Area</Label>
                    <Input type="text" placeholder="Area" name='area' value={area} onChange={handleInputChange} />
                </div>  
                <div>
                    <Label>Contact</Label>
                    <Input type="text" placeholder="Contact" name='contact' value={contact} onChange={handleInputChange} />
                </div>  
                <div>
                    <Label>Address</Label>
                    <Input type="text" placeholder="Address" name='address' value={address} onChange={handleInputChange} /> 
                </div>
                </div>
                <div className="form-detal">
                    <h1>Service Information</h1>
                <div>
                    <Label>Domain</Label>
                    {/* <Input type="text"  placeholder="Domain" onChange={(e)=>setFirstName(e.target.value)} /> */}
                    <select style={{width:'100%',height:'45px',padding:'0px 10px',color:" rgba(200, 200, 200, 1)",outline:'none',border: "1px solid rgba(200, 200, 200, 0.3)"}} name='domain' value={domain} onChange={handleInputChange} >
                            <option disabled selected>Worker Type</option>
                            <option>Plumber</option>
                            <option>Electrician</option>
                            <option>Mechanic</option>
                            <option>Painter</option>
                        </select>
                
                </div>

                    <div>
                    <Label>Working Fields</Label>
                    <select style={{width:'100%',height:'45px',padding:'0px 10px',color:" rgba(200, 200, 200, 1)",outline:'none',border: "1px solid rgba(200, 200, 200, 0.3)"}}  name='workingField' value={workingField} onChange={handleInputChange} >
                            <option disabled selected>Worker Field</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Industrial</option>
                            <option>Automobile</option>
                    </select>
                </div>
                <div>
                        <Label >Experience</Label>
                        <select type="text" placeholder="Experience" style={{width:'100%',height:'45px',padding:'0px 10px',color:" rgba(200, 200, 200, 1)",outline:'none',border: "1px solid rgba(200, 200, 200, 0.3)"}} name='experience' value={experience} onChange={handleInputChange}v>
                        <option disabled selected>Experience</option>
                        <option>1-Year</option>
                        <option>2-Years</option>
                        <option>5-Years</option>
                        <option>6 or More</option>
                        </select>
                    </div>

                <div>
                    <Label>Shop Address (Optional)</Label>
                    <Input type="text" placeholder="Address" name='shopaddress' value={shopaddress} onChange={handleInputChange} />
                </div>  
                <div>
                    <Label>Opening Time</Label>
                    <Input type="time" placeholder="Area" name='openingTime' value={openingTime} onChange={handleInputChange} />
                </div>  
                <div>
                    <Label>Closing Time</Label>
                    <Input type="time" placeholder="Country" name='closingTime' value={closingTime} onChange={handleInputChange} /> 
                </div>
                </div>
                    <SubmitButton type='submit' style={{height:'40px',width:'760px',textJustify:'center',margin:'15px auto ',marginLeft:''}}>Submit</SubmitButton>
            </form>
            </div>
            </div>
    )
}

export default Home;