import './new.css'
import {useState,useEffect} from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddService(){
    const history = useHistory();
    const [name,setName]=useState('');
const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('name',name);
   axios.post('http://localhost:4500/api/service/create',formData)
    .then(res=>{
        cogoToast.success('Service Added Successfully',{position:'top-center'});
        history.push('/servicelist');
    })
    .catch(err=>{
        cogoToast.error('To add award failed, try again',{position:'top-center'});
        history.push('/service/new');
        console.log(err.message);
    })
}
    
   

    return (
        <div className="container">
            <form>
           
  <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} className="form-control" required /><br/>
  <button  onClick={handleSubmit} className="btn">Add Award</button>

               
               </form>
        </div>
    )
}
export default AddService;