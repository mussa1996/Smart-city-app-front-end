import './list.css'
import React, {useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import jwt_decode from "jwt-decode";
const columns= [
    { field: '_id', headerName: 'ID', width: 70, hide: true },
    { field: 'user', headerName: 'User Name', width: 130 ,
    renderCell: (params) => {
      return (
        <div>
          {params.row.user.fullname}
        </div>
      );
    }},
  //   { field: 'business', headerName: 'Business ID', width: 130 ,
  //   // renderCell: (params) => {
  //   //   return (
  //   //     <div>
  //   //       {params.row.business.name}
  //   //     </div>
  //   //   );
  //   // }},
  // },  
    { field: 'total_amount', headerName: 'Total Amount', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'payment_id', headerName: 'Payment ID', width: 130 },
    { field: 'payment_date', headerName: 'Payment Date', width: 130 },
    // { field: 'payment_status', headerName: 'Payment Status', width: 130 },
];

const List=()=>{
    const [product,setProduct]=useState([]);
    const [search,setSearch]=useState('');
    const getProductData=()=>{
      const user= localStorage.getItem('userToken');
      const decoded = jwt_decode(user);
      // console.log("decoded",decoded);
      const userId=decoded._id;
        axios.get(`http://localhost:4500/api/order/getPaymentByUserId?id=${userId}`)
        .then(res=>{
          console.log("res",res.data);
          setProduct(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
      getProductData();
    }
    ,[])
    const rowData=product;
   
        const [data, setData] = useState(rowData);
        
        const handleDelete = (id) => {
            axios.delete(`http://localhost:4500/api/order/deletePayment?id=${id}`)
            .then(res=>{
                console.log(res);
                getProductData();  
            })

            .catch(err=>{
                console.log(err);
            })
        };
        const handleView = (id) => {
          axios.get(`http://localhost:4500/api/order/getPaymentById?id=${id}`)
          .then(res=>{
              console.log(res.data);
              getProductData();  
          })

          .catch(err=>{
              console.log(err);
          })
      };
        // const actionColumn = [
        //     {
        //       field: "action",
        //       headerName: "Action",
        //       width: 200,
        //       renderCell: (params) => {
        //         return (
        //           <div className="cellAction">
        //             <Link to={`/order/single/${params.row._id}`} style={{ textDecoration: "none" }}>
        //               <div className="viewButton" onClick={() => handleView(params.row._id)} >View</div>
        //             </Link>
        //             <div
        //               className="deleteButton"
        //               onClick={() => handleDelete(params.row._id)}
        //             >
        //               Delete
        //             </div>
                   
        //           </div>
        //         );
        //       },
        //     },
        //   ];
         
        const handleSearch = (e) => {
            setSearch(e.target.value);
            const searchData = rowData.filter((item) => {
              if(search==""){
                return item;
              }
              else if(item.display_name.toLowerCase().includes(e.target.value.toLowerCase()))
                return item ;
            });
            setData(searchData);
            
        };
        
        return (
          <><div className="datatableTitle">
            <div className='tableTitle'>
            Order Lists
            </div>
          </div>
          <div style={{ height: 500, width: '100%' }}>
              {/* <input type="text" placeholder='Search' className='search' onChange={handleSearch}></input> */}
              <DataGrid
                rows={rowData}
                columns={columns}
                pageSize={7}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[7]}
                checkboxSelection />
            </div></>
          );


         
}


export default List;
