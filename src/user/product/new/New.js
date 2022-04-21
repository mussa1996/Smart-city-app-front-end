import {useState,useEffect} from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function AddProduct(){
    const history = useHistory();
    const [product,setProduct]=useState('')
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [price_level,setPriceLevel]=useState('');
    const [price,setPrice]=useState('');
    const [photo,setPhoto]=useState('');
const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('name',name);
    formData.append('description',description);
    formData.append('price_level',price_level);
    formData.append('price',price);
    formData.append('photo',photo);
   axios.post('http://localhost:4500/api/product/create',formData)
    .then(res=>{
        cogoToast.success('Product Added Successfully',{position:'top-center'});
        history.push('/productlist');
    })
    .catch(err=>{
        cogoToast.success('Product add failed',{position:'top-center'});
        history.push('/product/new');
        console.log(err.message);
    })
}
    
   

    return (
        <div>
            <div className="col-sm-6 offset-sm-3">
                <br/>
  <input type="text" placeholder="Product Name" onChange={(e)=>setName(e.target.value)} className="form-control" /><br/>
  <input type="text" placeholder="Price"  onChange={(e)=>setPrice(e.target.value)} className="form-control" /><br/>
  <input type="text" placeholder="Price level"  onChange={(e)=>setPriceLevel(e.target.value)} className="form-control" /><br/>
  <input type="text" placeholder="Description"  onChange={(e)=>setDescription(e.target.value)} className="form-control" /><br/>
  <input type="file" placeholder="image" onChange={(e)=>setPhoto(e.target.files[0])} className="form-control" />
  <button className="btn btn-primary" onClick={handleSubmit}>Add Product</button>

               </div>
        </div>
    )
}
export default AddProduct;