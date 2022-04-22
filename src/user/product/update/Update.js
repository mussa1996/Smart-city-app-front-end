import './update.css'
import {useState,useEffect} from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateProduct(){
    const history = useHistory();
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [price_level,setPrice_level]=useState('');
    const[description,setDescription]=useState('');
    const [photo,setPhoto]=useState('');
    const queryParams = new URLSearchParams(window.location.pathname);
    const params = window.location.pathname.split("/");
    const id = params[params.length - 1];
    const [product,setProduct]=useState([]);
      
      const handleUpdate = (id) => {
        const queryParams = new URLSearchParams(window.location.pathname);
        const params = window.location.pathname.split("/");
         id = params[params.length - 1];
        axios.get(`http://localhost:4500/api/product/getOne?id=${id}`)
        .then(res=>{
            
          setProduct(res.data.product); 
          setName(res.data.product.name);
            setPrice(res.data.product.price);
            setPrice_level(res.data.product.price_level);
            setDescription(res.data.product.description);
            // setPhoto(res.data.product.photo);
            console.log("test",res.data.product);

            
        })
  
        .catch(err=>{
            console.log(err);
        })
    };
    useEffect(()=>{
       handleUpdate()
  }
  ,[])
  const rowData=product

const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('price',price);
    formData.append('name',name);
    formData.append('price_level',price_level);
    formData.append('photo',photo);
    formData.append('description',description);
    console.log("formData",formData);
    console.warn("data for update",{price,name,price_level,photo,description});
   axios.put(`http://localhost:4500/api/product/update?id=${id}`,formData)
    .then(res=>{
        cogoToast.success('Product Updated Successfully',{position:'top-center'});
        history.push('/user/productlist');
    })
    .catch(err=>{
        cogoToast.error('To update Product failed, try again',{position:'top-center'});
        history.push(`/user/product/update/${id}`);
        console.log(err.message);
    })
}
    
   

    return (
        <div className="container">
            <form>

            <input type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/><br/>
  <input type="text" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control"/><br/>
 
  <input type="text" placeholder="Price_level"  value={price_level} onChange={(e)=>setPrice_level(e.target.value)} className="form-control"  /><br/>
    <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control"/><br/>
  <input type="file" placeholder="photo"  onChange={(e)=>setPhoto(e.target.files[0])} className="form-control"/>
  <button  onClick={handleSubmit} className="btn">Update Product</button>

               
               </form>
        </div>
    )
}
export default UpdateProduct;