
import React, { useState } from 'react';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import signupAction from '../../actions/Signup.action';
import cogoToast from 'cogo-toast';
import { Formik, Form } from 'formik';
import { ErrorMessage,useField } from 'formik';
import { TextField } from './TextField.js';
import * as Yup from 'yup';
import Axios from 'axios';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Address from './address.js';
import PhoneInput from 'react-phone-number-input'
const Signup = (props) => {
  // const [file, setFile] = useState("");
  // const {field,meta}=useField(props);
  // const [validate]=useState({})
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
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({})
  // const [values, setValues] = useState({
  //     business_name: '',
  //     owner_name: '',
  //     phone: '',
  //     business_type: '',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  //     address: '',
  //     email: '',
  //     password: ''
  // })
    let [state, setState] = useState({})
    // const handleChange = (e) => {
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     })
    //     // console.log(state)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signup(state)
        console.log(state)
       
    }
    if (props.signupState.success) {
        cogoToast.success("Successfully Register User");
    props.history.push('/login')
}
    if (props.signupState.errorOpen) {
        cogoToast.error(
            <div>
              <b>oops!</b>
                <div>{props.signupState.error}</div>
            </div>
          )
        }
  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  let formData = new FormData();
 const fileSelectedHandler = (event) => {
 if (event.target.files.length > 0) {
   formData.append('file',event.target.files[0]);
   setState({
     ...state,
     photo: event.target.files[0].name
   });
 }
  };

//  const fileUploadHandler = () => {
//   const options = {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   };
//   Axios.post('http://localhost:4500/api/business/signup', options,{formData})
  
//   .then(data => { 
//     console.log("data",data);
//     setState({
//       ...state,
//       logo: data.secure_url
//     })
//   })
//   .catch(err => console.log(err));
// };

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
            <p>Create your Account</p>
            <div className="auth-form-container text-start">
              <Form
                className="auth-form"
                method="POST"
                onSubmit={handleSubmit}
                autoComplete={"off"}
              >
                <div className="name mb-3">
                  <TextField
                    type="text"
                    className="form-control" 
                    id="business_name"
                    name="business_name"
                    // value={values.business_name}
                    // onChange={handleChange}
                    placeholder="Business Name"
                    // onChange={(e) => setBusiness_name(e.target.value)}
                  />

                  
                  {/* {ErrorMessage.business_name && (
                    <p className="error">{ErrorMessage.business_name}</p>
                  )} */}
                  {/* <ErrorMessage /> */}

                </div>

                <div className="name mb-3">
                  <TextField
                    type="text"
                    className="form-control"
                    id="owner_name"
                    name="owner_name"
                    // value={values.owner_name}
                    // onChange={handleChange}
                    placeholder="Owner Name"
                    // onChange={(e) => setOwner_name(e.target.value)}
                  />

                </div>

                <div className="name mb-3">
                  <Address />
                 
                </div>

                <div className="name mb-3">
                 
                  <TextField
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    // value={values.phone}
                    // onChange={handleChange}
                    placeholder="Phone"
                  />
                </div>

                <div className="name mb-3">
                  <select name="classSelect">
                  <option value="">Please choose category</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Attraction">Attraction</option>
                    <option value="Other">Other</option>
                  </select>
                    
                  

                </div>

                <div className="email mb-3">
                  <TextField
                    type="email"
                    className="form-control" 
                    id="email"
                    name="email"
                    // value={values.email}
                    // onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="website mb-3">
                  <TextField
                    type="website"
                    className="form-control" 
                    id="website"
                    name="website"
                    // value={values.email}
                    // onChange={handleChange}
                    placeholder="website"
                  />
                </div>
                
                {/* <div className="formInput">
                <label htmlFor="file">
                  photo: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://via.placeholder.com/150"
              }
              alt=""
            />
          </div>
              </div> */}
              <div className="name mb-3">
                
                <input type="file" onChange={fileSelectedHandler} name="photo" id='photo'></input> 
               

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