import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";
import { HttpRequest } from "../../helper/httpRequest";
import cogoToast from "cogo-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const Register = () => {
  const [business_name, setBusiness_name] = useState("");
  const [owner_name, setOwner_name] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [business_type, setBusiness_type] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      business_name: {
        value: business_name,
        isRequired: true,
      },
      owner_name: {
        value: owner_name,
        isRequired: true,
      },
      address: {
        value: address,
        isRequired: true,
      },
      phone: {
        value: phone,
        isRequired: true,
      },
      business_type: {
        value: business_type,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  // const register = (e) => {
  //     e.preventDefault();

  //     const validate = validateRegister();

  //     if (validate) {
  //         setValidate({});
  //         setName('');
  //         setUsername('')
  //         setEmail('')
  //         setPassword('');
  //         alert('Successfully Register User');
  //     }
  // }
  const handleForm = async (e) => {
    e.preventDefault();
    const resp = await HttpRequest(
      "POST",
      "http://localhost:4200/api/use/signUp",
      validateRegister()
    );
    console.log(resp);
    if (!resp.errors) {
      cogoToast.success("Successfully Register User");
    }
  };
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
                    value={business_name}
                    placeholder="Business Name"
                    onChange={(e) => setBusiness_name(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.business_name
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.business_name
                      ? validate.validate.business_name[0]
                      : ""}
                  </div>
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
                    value={owner_name}
                    placeholder="Owner Name"
                    onChange={(e) => setOwner_name(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.owner_name
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.owner_name
                      ? validate.validate.owner_name[0]
                      : ""}
                  </div>
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
                    value={address}
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.address
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.address
                      ? validate.validate.address[0]
                      : ""}
                  </div>
                </div>

                <div className="name mb-3">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.phone
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.phone
                      ? validate.validate.phone[0]
                      : ""}
                  </div>
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
                    value={business_type}
                    placeholder="Business Type"
                    onChange={(e) => setBusiness_type(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.business_type
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.business_type
                      ? validate.validate.business_type[0]
                      : ""}
                  </div>
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
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.email
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.email
                      ? validate.validate.email[0]
                      : ""}
                  </div>
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
                      value={password}
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

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </div>
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
  );
};

export default Register;
