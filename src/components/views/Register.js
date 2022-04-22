
import React, { useState ,useEffect} from 'react';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import signupAction from '../../actions/Signup.action';
import cogoToast from 'cogo-toast';
import { Formik, Form } from 'formik';
import { ErrorMessage,useField } from 'formik';
import {useHistory} from 'react-router-dom'
import { TextField } from './TextField.js';
import * as Yup from 'yup';
import axios from 'axios';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Address from './address.js';
import PhoneInput from 'react-phone-number-input'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
// import useGeolocation from './location';
function Signup (){
  const validate = Yup.object({
    business_name: Yup.string().max(50, 'Business name is too long').required('Business name is required'),
    owner_name: Yup.string().max(50, 'Owner name is too long').required('Owner name is required'),
    category: Yup.string().required('Category is required'),
    address: Yup.string().max(50, 'Address is too long').required('Address is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    website: Yup.string().max(1000, 'Website is too long').required('Website is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    phone: Yup.string().min(10, 'Phone number is too short').max(10, 'Phone number is too long').required('Phone number is required'),    
  });
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [business_name, setBusinessName] = useState('');
  const [owner_name, setOwnerName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const[locatio,setLocation]=useState({
    loaded:false,
    coordinates:{lat:"",lng:""}
});
 
  const useGeoLocation = () => {
    
    
    const geoSuccess = (locatio) => {
       setLocation({
           loaded:true,
           coordinates:{lat:locatio.coords.latitude,lng:locatio.coords.longitude}
           
       });
      //  console.log("location in",{latitude:location.coords.latitude,longitude:location.coords.longitude});
       cogoToast.success('Location Found',{position:'top-center'});
       };
   
       const geoError = (err) => {
           setLocation({
               loaded:true,
               err,
               
           })
           cogoToast.error('User denied GeoLocation, try again',{position:'top-center'});
   
       console.log(err.message);
       };
    useEffect(()=>{
           const geo = navigator.geolocation;
           if (!geo) {
               geoError(
                   {
                       code:0,
                       message:"Geolocation is not supported"
                   }
               )
              
           } 
           geo.getCurrentPosition(geoSuccess, geoError);
       },[]);
   
       };
       
       const location=useGeoLocation();
       console.log("location in",locatio.coordinates.lat,locatio.coordinates.lng);
      //  console.log("location in",{lat:location.coords.latitude,lng:location.coords.longitude});
const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('business_name',business_name);
    formData.append('owner_name',owner_name);
    formData.append('category',category);
    formData.append('address',address);
    formData.append('email',email);
    formData.append('website',website);
    formData.append('password',password);
    formData.append('phone',phone);
    formData.append('photo',photo);
    formData.append('latitude',locatio.coordinates.lat);
    formData.append('longitude',locatio.coordinates.lng);
    console.warn("business data",business_name,owner_name,category,address,email,website,password,phone,photo,locatio.coordinates.lat,locatio.coordinates.lng);
    axios.post('http://localhost:4500/api/business/signup',formData)
    .then(res=>{
        cogoToast.success('Business Created Successfully',{position:'top-center'});
        history.push('/login');
    }
    )
    .catch(err=>{
        cogoToast.error('To create business failed, try again',{position:'top-center'});
        history.push('/register');
        console.log(err.message);
    }
    )
}
 
    const handleChange = address => {
      setAddress(address);
  }
  const handleSelect = address => {
    geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
};
  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    
    <Formik
      initialValues={{
      business_name: '',
      owner_name: '',
      phone: '',
      category: '',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      address: '',
      email: '',
      website: '',
      password: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
       {formik => (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
      </div>

      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <h1>Create your Account</h1>
            <div className="auth-form-container text-start">
              <Form
                className="auth-form"
                method="POST"
                onSubmit={handleSubmit}
                autoComplete={"off"}
              >
               
               <div className="name mb-3">
                
                  <input
                    type="text"
                    className="form-control" 
                    // value={values.business_name}
                    // onChange={handleChange}
                    placeholder="Business Name"
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                  </div>

                

                <div className="name mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="owner_name"
                    name="owner_name"
                    // value={values.owner_name}
                    // onChange={handleChange}
                    placeholder="Owner Name"
                    onChange={(e) => setOwnerName(e.target.value)}
                  />

                </div>

                {/* <div className="name mb-3">
                  <Address onChange={(e) => setAddress(e.target.value)} />
                  
                 
                </div> */}
                 <PlacesAutocomplete
                 style={{width:'100%'}}
                    value={address}
                    onChange={setAddress}
                    onSelect={setAddress}
                > 
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search address ...',
                                    className: 'location-search-input',
                                })} style={{ width: '100%', padding: '4px' , border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px'}}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>

                <div className="name mb-3">
                 
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    // value={values.phone}
                    // onChange={handleChange}
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="name mb-3">
                  <select name="classSelect" onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Please choose category</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Attraction">Attraction</option>
                    <option value="Other">Other</option>
                    
                  </select>
                    
                  

                </div>

                <div className="email mb-3">
                  <input
                    type="email"
                    className="form-control" 
                    id="email"
                    name="email"
                    // value={values.email}
                    // onChange={handleChange}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="website mb-3">
                  <input
                    type="website"
                    className="form-control" 
                    id="website"
                    name="website"
                    // value={values.email}
                    // onChange={handleChange}
                    placeholder="website"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                
               
              <div className="name mb-3">
                
                <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}  name="photo" id='photo'></input> 
               

                </div>
                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control "
                      name="password"
                      id="password"
                      // value={values.password}
                      // onChange={handleChange}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={(e) => togglePassword(e)}
                    >
                      <i
                        className={
                          showPassword ? "far fa-eye" : "far fa-eye-slash"
                        }
                      ></i>{" "}
                    </button>
                  </div>
                 
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
               {/* <form>
           
           <input type="text" placeholder="Product Name" onChange={(e)=>setBusinessName(e.target.value)} className="form-control" required /><br/>
           <input type="text" placeholder="Price"  onChange={(e)=>setOwnerName(e.target.value)} className="form-control" required/><br/>
           <input type="text" placeholder="Price level"  onChange={(e)=>setAddress(e.target.value)} className="form-control" required /><br/>
           <input type="text" placeholder="Description"  onChange={(e)=>setWebsite(e.target.value)} className="form-control" required/><br/>
           <input type="file" placeholder="image" onChange={(e)=>setPhoto(e.target.files[0])} className="form-control" required />
           
         <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto" onClick={handleSubmit}>Submit</button>
                        
                        </form> */}

              <hr />
              <div className="auth-option text-center pt-2">
                Have an account?{" "}
                <Link className="text-link" to="/login">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
      signup: (credentials) => dispatch(signupAction(credentials))
  }
}
const mapStateToProps = (state) => {
  return {
      signupState:state.signup
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);