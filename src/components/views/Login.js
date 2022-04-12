import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'
import "../../assets/scss/auth.scss";
import LoginForm from "./loginForm";
function App(submitForm) {
    const { handleChange, handleLogin, errors, values } = LoginForm(submitForm);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    // const validateLogin = () => {
    //     let isValid = true;

    //     let validator = Form.validator({
    //         email: {
    //             value: email,
    //             isRequired: true,
    //             isEmail: true
    //         },
    //         password: {
    //             value: password,
    //             isRequired: true,
    //             minLength: 6
    //         }
    //     });

    //     if (validator !== null) {
    //         setValidate({
    //             validate: validator.errors
    //         })

    //         isValid = false
    //     }
    //     return isValid;
    // }

    // const authenticate = (e) => {
    //     e.preventDefault();

    //     const validate = validateLogin();

    //     if (validate) {
    //         setValidate({});
    //         setEmail('');
    //         setPassword('');
    //     }
    // }

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
                        <p>Login to your account</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={handleLogin}  autoComplete={'off'}>
                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}

                                        placeholder="Email"
                                    />

{errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="password"
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                           
                                        />

                                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                                        {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                                    </div>


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

export default App;