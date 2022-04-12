import { useState } from "react"
import { HttpRequest } from "../../helper/httpRequest"
import validation from "../../helper/validation"
import { useHistory } from "react-router"
import cogoToast from "cogo-toast";
const LoginForm = (submitForm) => {
    const history=useHistory()
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
  
const handleLogin = async(e) => {
    e.preventDefault()
    setErrors(validation(values))
    console.log(values)
    const resp=await HttpRequest("POST",'http://localhost:4500/api/v1/smart/user/login',values)
    console.log(resp)
    if(!resp.errors){
        cogoToast.success("Successfully Login");
        history.push('/dashboard')
}
}
return{handleChange,handleLogin,errors,values}
}
export default LoginForm