    


const validation = (values) => {
    let errors={}
            if (!values.name) {
          
          errors.name= "*Please enter your business name.";
        }
        else if (!values.name.length < 3) {
          errors.name= "*Your name is too short.";
        }
        else{
            errors.name= "";
        }
      
        if (typeof values.name !== "undefined") {
          if (!values.name.match(/^[a-zA-Z ]*$/)) {
            
            errors.name = "Please enter alphabet characters only.";
          }
        }
        if (!values.owner_name) {
          
          errors.owner_name = "*Please enter your owner name.";
        }
        
      
        if (typeof values.owner_name !== "undefined") {
          if (!values.owner_name.match(/^[a-zA-Z ]*$/)) {
            
            errors.owner_name = "*Please enter alphabet characters only.";
          }
        }
        if (!values.address) {
          
          errors.address = "*Please choose address.";
        }
        if (!values.category) {
          
          errors.category = "*Please choose category.";
        }
        if (!values.website) {
          
          errors.website = "*Please enter your website.";
        }
       
        if (!values.email) {
          
          errors.email = "*Please enter your email.";
        }
      
        if (typeof values.email !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(values.email)) {
            
            errors.email = "*Please enter valid email.";
          }
        }
      
        if (!values.phone) {
          
          errors.phone = "*Please enter your mobile number.";
        }
      
        if (typeof values.phone !== "undefined") {
          if (!values.phone.match(/^[0-9]{10}$/)) {
            
            errors.phone = "*Please enter valid mobile number.";
          }
        }
        if (!values.photo) {
          
            errors.photo = "*Please enter choose photo.";
          }
      
        if (!values.password) {
          
          errors.password = "*Please enter your password.";
        }
      
        if (typeof values.password !== "undefined") {
          if (!values.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            
            errors.password = "*Please enter secure and strong password.";
          }
        }
      
         

    return errors;
}

export default validation