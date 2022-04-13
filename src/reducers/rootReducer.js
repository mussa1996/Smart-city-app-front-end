import { combineReducers } from 'redux'
import signupReducer from './Signup.reducer'
import LoginReducer from './LoginReducer'


 const rootReducer =combineReducers({
    signup: signupReducer,
    login: LoginReducer,
 })

 export default rootReducer