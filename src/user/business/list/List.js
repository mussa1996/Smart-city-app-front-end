import './list.css'
import React, {useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 70, hide: true },
    { field: 'business_name', headerName: 'Business Name', width: 130 },
    { field: 'owner_name', headerName: 'Owner Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'photo', headerName: 'Photo', width: 200 ,
    renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.photo} alt="avatar" />
            {params.row.business_name}
          </div>
        );
      },
},
    { field: 'website', headerName: 'Website', width: 130 },

];

const List=()=>{
    const [business,setBusiness]=useState([]);
    const [search,setSearch]=useState('');
    const getBusinessData=()=>{
        axios.get('http://localhost:4500/api/admin/getAll')
        .then(res=>{
            setBusiness(res.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getBusinessData();
    }
    ,[])
    const rowData=business;
   
        const [data, setData] = useState(rowData);
        
        const handleDelete = (id) => {
            axios.delete(`http://localhost:4500/api/admin/delete?id=${id}`)
            .then(res=>{
                console.log(res);
                getBusinessData();  
            })

            .catch(err=>{
                console.log(err);
            })
        };
        const handleView = (id) => {
          axios.delete(`http://localhost:4500/api/admin/getOne?id=${id}`)
          .then(res=>{
              console.log(res);
              getBusinessData();  
          })

          .catch(err=>{
              console.log(err);
          })
      };
      console.log("view",handleView.data)
        const actionColumn = [
            {
              field: "action",
              headerName: "Action",
              width: 200,
              renderCell: (params) => {
                return (
                  <div className="cellAction">
                    <Link to="/single" style={{ textDecoration: "none" }}>
                      <div className="viewButton" onClick={() => handleView(params.row._id)} >View</div>
                    </Link>
                    <div
                      className="deleteButton"
                      onClick={() => handleDelete(params.row._id)}
                    >
                      Delete
                    </div>
                  </div>
                );
              },
            },
          ];
         
        const handleSearch = (e) => {
            setSearch(e.target.value);
            const searchData = rowData.filter((item) => {
              if(search==""){
                return item;
              }
              else if(item.business_name.toLowerCase().includes(e.target.value.toLowerCase()))
                return item ;
                console.log(item.business_name)
            });
            setData(searchData);
            
        };
        
        return (

            <div style={{ height: 400, width: '100%' }}>
              <input type="text" placeholder='Search' className='search' onChange={handleSearch}></input>
              <DataGrid
                rows={rowData}
                columns={columns.concat(actionColumn)}
                pageSize={5}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          );


         
}


export default List;
