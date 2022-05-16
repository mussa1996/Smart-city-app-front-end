import './list.css'
import React, {useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const columns= [
    { field: '_id', headerName: 'ID', width: 70, hide: true },
    { field: 'award_type', headerName: 'Award Type', width: 130 },
    { field: 'display_name', headerName: 'Award Name', width: 130 },
    { field: 'year', headerName: 'Year', width: 130 },
    { field: 'business_id', headerName: 'Business Name', width: 130,
    renderCell: (params) => {
      return (
        <div>
          {params.row.business_id.name}
        </div>
      );
    }
  },
    { field: 'images', headerName: 'Photo', width: 200 ,
    renderCell: (params) => {
      console.log(params.row.business_id);
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.images} alt="avatar" />
            {params.row.display_name}
          </div>
        );
      },
}
    

];

const List=()=>{
    const [award,setAward]=useState([]);
    const [search,setSearch]=useState('');
    const getAwardData=()=>{
        axios.get('http://localhost:4500/api/award/getAll')
        .then(res=>{
          setAward(res.data.award);
          console.log("award data",res.data.award);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
      getAwardData();
    }
    ,[])
    const rowData=award;
   
        const [data, setData] = useState(rowData);
        
        const handleDelete = (id) => {
            axios.delete(`http://localhost:4500/api/award/delete?id=${id}`)
            .then(res=>{
                console.log(res);
                getAwardData();  
            })

            .catch(err=>{
                console.log(err);
            })
        };
        const handleView = (id) => {
          axios.get(`http://localhost:4500/api/award/getOne?id=${id}`)
          .then(res=>{
              console.log(res);
              getAwardData();  
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
                    <Link to={`/award/single/${params.row._id}`} style={{ textDecoration: "none" }}>
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

            <div style={{ height: 500, width: '100%' }}>
              {/* <input type="text" placeholder='Search' className='search' onChange={handleSearch}></input> */}
              <DataGrid
                rows={rowData}
                columns={columns.concat(actionColumn)}
                pageSize={7}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[7]}
                checkboxSelection
              />
            </div>
          );


         
}


export default List;
