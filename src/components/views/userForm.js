import { useState } from "react"
import { HttpRequest } from "../../helper/httpRequest"
import validation from "../../helper/validation"
import { useHistory } from "react-router"
import cogoToast from "cogo-toast";
const useForm = (submitForm) => {
    const history=useHistory()
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        business_name: '',
        owner_name: '',
        phone: '',
        business_type: '',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        address: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
   
    const handleForm = async(e) => {
        e.preventDefault()
        setErrors(validation(values))
        console.log(values)
        const resp=await HttpRequest("POST",'http://localhost:4500/api/v1/smart/user/signup',values)
        console.log(resp)
        if(!resp.errors){
            cogoToast.success("Successfully Register User");
            history.push('/login')
    }
}
const handleFormLogin = async(e) => {
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
return{handleChange,handleForm,errors,values,handleFormLogin}
}
export default useForm