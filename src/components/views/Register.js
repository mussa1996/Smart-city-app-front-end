import { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import userForm from "./userForm";
const Register = (submitForm) => {
  const { handleChange, handleForm, errors, values } = userForm(submitForm);
  const [validate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

 
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
            <p>Create your Account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={handleForm}
                autoComplete={"off"}
              >
                <div className="name mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.business_name
                        ? "is-invalid "
                        : ""
                    }`}
                    id="business_name"
                    name="business_name"
                    value={values.business_name}
                    onChange={handleChange}
                    placeholder="Business Name"
                    // onChange={(e) => setBusiness_name(e.target.value)}
                  />

                  {/* <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.business_name
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.business_name
                      ? validate.validate.business_name[0]
                      : ""}
                  </div> */}
                  {errors.business_name && (
                    <p className="error">{errors.business_name}</p>
                  )}
                </div>

                <div className="name mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.owner_name
                        ? "is-invalid "
                        : ""
                    }`}
                    id="owner_name"
                    name="owner_name"
                    value={values.owner_name}
                    onChange={handleChange}
                    placeholder="Owner Name"
                    // onChange={(e) => setOwner_name(e.target.value)}
                  />

                  {errors.owner_name && (
                    <p className="error">{errors.owner_name}</p>
                  )}
                </div>

                <div className="name mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.address
                        ? "is-invalid "
                        : ""
                    }`}
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    placeholder="Address"
                    // onChange={(e) => setAddress(e.target.value)}
                  />

                  {errors.address && <p className="error">{errors.address}</p>}
                </div>

                <div className="name mb-3">
                 
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.phone
                        ? "is-invalid "
                        : ""
                    }`}
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />

                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div className="name mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.business_type
                        ? "is-invalid "
                        : ""
                    }`}
                    id="business_type"
                    name="business_type"
                    value={values.business_type}
                    onChange={handleChange}
                    placeholder="Business Type"
                  />

                  {errors.business_type && (
                    <p className="error">{errors.business_type}</p>
                  )}
                </div>

                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />

                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        validate.validate && validate.validate.password
                          ? "is-invalid "
                          : ""
                      }`}
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
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
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
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
  );
};

export default Register;
