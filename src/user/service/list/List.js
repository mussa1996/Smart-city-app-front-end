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
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'busines_id', headerName: 'Business Name', width: 130 },
    

];

const List=()=>{
    const [service,setService]=useState([]);
    const [search,setSearch]=useState('');
    const getServiceData=()=>{
        axios.get('http://localhost:4500/api/service/getAll')
        .then(res=>{
          setService(res.data.service);
          console.log("award data",res.data.service);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
      getServiceData();
    }
    ,[])
    const rowData=service;
   
        const [data, setData] = useState(rowData);
        
        const handleDelete = (id) => {
            axios.delete(`http://localhost:4500/api/service/delete?id=${id}`)
            .then(res=>{
                console.log(res);
                getServiceData();  
            })

            .catch(err=>{
                console.log(err);
            })
        };
        const handleView = (id) => {
          axios.delete(`http://localhost:4500/api/service/getOne?id=${id}`)
          .then(res=>{
              console.log(res);
              getServiceData();  
          })

          .catch(err=>{
              console.log(err);
          })
      };
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
              else if(item.display_name.toLowerCase().includes(e.target.value.toLowerCase()))
                return item ;
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
