import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REGUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

 export const signin = (credentials) => dispatch => {
    dispatch({
        type:LOGIN_REQUEST
    })
    return axios.post('http://localhost:4500/api/user/login', credentials)
        .then(res => {
            localStorage.setItem('userToken', res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload:res.data
            })
        }).catch(err => {
            if (err.response) {
                dispatch({
                    type: LOGIN_ERROR,
                    payload:'Wrong email or password'
                     })
            }
             })
}

export const logout =()=> dispatch => {
    dispatch({
        type: LOGOUT
    })
};