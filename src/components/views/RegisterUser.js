
import React, { useState} from 'react';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import signupAction from '../../actions/Signup.action';
import cogoToast from 'cogo-toast';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import PlacesAutocomplete from 'react-places-autocomplete';
function Signup (props){

  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [fullname, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
    const [errors, setErrors] = useState({})
    
const handleSubmit=async(e)=>{
    e.preventDefault();
   
    const formData=new FormData();
    formData.append('fullname',fullname);
    formData.append('role',role);
    formData.append('address',address);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('photo',photo);
    console.warn("business data",fullname,role,address,email,password,photo);
    axios.post('http://localhost:4500/api/user/signup',formData)
    .then(res=>{
        cogoToast.success('User Created Successfully',{position:'top-center'});
        history.push('/login');
    }
    )
    .catch(err=>{
        cogoToast.error('To create user failed, try again',{position:'top-center'});
        history.push('/register/user');
        console.log(err.message);
    }
    )
}

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    
    
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
              <form
                className="auth-form"
                method="POST"
                onSubmit={handleSubmit}
                autoComplete={"off"}
              >
               
               <div className="name mb-3">
                
                  <input
                   
                    type="text"
                    className="form-control" 
                    id='fullname'
                    name="fullname"
                    placeholder="Fullname"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  ></input>
                   
                  </div>
                
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
                  <select name="classSelect" onChange={(e) => setRole(e.target.value)}  >
                  <option value="">Please choose role</option>
                    <option value="business">Business</option>
                    <option value="user">User</option>
                    <option value="others">Other</option>
                    
                  </select>
                 
                </div>

                <div className="email mb-3">
                  <input
                    type="email"
                    className="form-control" 
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                   
                </div>
                
               
              <div className="name mb-3">
                
                <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}  name="photo" id='photo' required ></input> 
                {errors.photo && <p className="error">{errors.photo}</p>}

                </div>
                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control "
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
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
              </form>
              

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