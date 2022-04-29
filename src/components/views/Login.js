import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/auth.scss";
import {signin} from '../../actions/LoginAction'
import { connect } from 'react-redux'
import cogoToast from 'cogo-toast';
import validation from "../../helper/validation";

function Login(props) {
    const [errors, setErrors] = useState({})
  const [values] = useState({
      email: '',
      password: ''
  })
    const [remember, setRemember] = useState(false);
    const [validate] = useState({});
    const [showPassword, setShowPassword] = useState(false);


    let [state, setState] = useState({})
    const token  =localStorage.getItem('userToken')
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      
        props.signIn(state)
        if (props.login.error) {
            cogoToast.error(
                "Failed to login",
                <div>
                  <b>oops!</b>
                    <div>{props.login.message}</div>
                </div>
              )
            }
    }
    if (props.login.success) {
        cogoToast.success("Successfully Login");
        props.history.push('/user-dashboard')
    }
    
    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }
    return (
        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <h1>Login to your account</h1>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={handleSubmit}  autoComplete={'off'}>
                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        // value={values.email}
                                        onChange={handleChange}

                                        placeholder="Email"
                                    />
{errors.email && <p className="error">{errors.email}</p>}
                  
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="password"
                                            id="password"
                                            // value={values.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                           
                                        />

                                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                  
                                    </div>

                                    {errors.password && <p className="error">{errors.password}</p>}
                                    <div className="extra mt-3 row justify-content-between">
                                        <div className="col-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.currentTarget.checked)} />
                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="forgot-password text-end">
                                                <Link to="/forgot-password">Forgot password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Log In</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2">No Account? <Link className="text-link" to="/register" >Sign up </Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (Credential)=>dispatch(signin(Credential))
    }
}
const mapStateToProps = (state) => {
    return {
        login:state.login
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);
// export default App;