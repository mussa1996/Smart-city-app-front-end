const validation = (values) => {
    let errors={}
    if(!values.business_name){
        errors.business_name=" Business Name is required"
    }
    if(!values.owner_name){
        errors.owner_name="Owner Name is required"
    }
    if(!values.address){
        errors.address="Address  is required"
    }
    if(!values.phone){
        errors.phone="Phone is required"
    }
    if(!values.business_type){
        errors.business_type="Business Type is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }
    if(!values.password){
        errors.password="Password is required"
    }
    return errors;
}

export default validation