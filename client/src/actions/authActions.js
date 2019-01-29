import { GET_ERRORS, SET_CURRENT_USER } from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
            .then(res => history.push('/login'))
            .catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            )
}

//Login - Get user token
export const userLogin = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            //save to localStorage
            const { token } = res.data
            //set token to localStorage
            localStorage.setItem('jwtToken', token)
            // Set token to auth header
            setAuthToken(token)
            //decode token to get user data
            const decoded = jwt_decode(token)
            //Set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        )
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//log user out
export const userLogOut = () => dispatch => {
    //remove token from localstorage
    localStorage.removeItem('jwtToken')
    //remove auth header for future requests
    setAuthToken(false)
    //set current user to empty object
    dispatch(setCurrentUser({}) )
}