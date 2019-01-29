import axios from 'axios'

import { GET_PROFILE, GET_PROFILES, CLEAR_CURRENT_PROFILE, PROFILE_LOADING, GET_ERRORS, SET_CURRENT_USER } from './types'

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading())
    axios.get('/api/profile')
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(() => dispatch({
            type: GET_PROFILE,
            payload: {}
        }))
}

export const createProfile = (profileData, history) => dispatch => {
    axios.post('./api/profile', profileData)
        .then(() => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//delete account & profile
export const deleteAccount = () => dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone!')) {
        axios.delete('./api/profile')
            .then(res => dispatch({
                type: SET_CURRENT_USER,
                payload: {}
            }))
            .catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
    }
}

//add experiance
export const addExperiance = (expData, history) => dispatch => {
    axios.post('./api/profile/experience', expData)
        .then(() => history.push('./dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//delete experience
export const deleteExperience = id => dispatch => {
    axios.delete(`./api/profile/experience/${id}`)
        .then((res) => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//add education
export const addEducation = (eduData, history) => dispatch => {
    axios.post('./api/profile/education', eduData)
        .then(() => history.push('./dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//delete education
export const deleteEducation = id => dispatch => {
    axios.delete(`./api/profile/education/${id}`)
        .then((res) => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

//Get all profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading())
    axios.get(`./api/profile/all`)
        .then((res) => dispatch({
            type: GET_PROFILES,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILES,
            payload: null
        }))
}

//Get profile by handle
export const getProfileByHandle = handle => dispatch => {
    dispatch(setProfileLoading())
    axios.get(`/api/profile/handle/${handle}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(() => dispatch({
            type: GET_ERRORS,
            payload: null
        }))
}

//Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}

//Clear profile
export const clearCurrentProfile = () => {
        return {
            type: CLEAR_CURRENT_PROFILE
        }
}