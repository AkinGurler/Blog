import React, { useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {GoogleOAuthProvider} from "@react-oauth/google"
import {GoogleLogin,googleLogout} from "@react-oauth/google"
import Icon from "./Icon"
import useStyles from './styles'
import Input from "./Input"
import jwt_decode from "jwt-decode"
import {signin,signup} from "../../actions/auth"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setisSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
   const dispatch=useDispatch();
  const history=useHistory(); 

  const handleSubmit = (e) => {
    e.preventDefault()
   /*  console.log(formData);
    if(isSignup){
      dispatch(signup(formData,history))
    }else{
      dispatch(signin(formData,history))
    } */
  }
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})

  }
  const swichtMode = () => {
    setisSignup((prevMode) => !prevMode)
    setShowPassword(false);
  } 
  const createOrGetUser=async (response) =>{
    const userObject=jwt_decode(response.credential)
    const name=userObject.name
    const picture=userObject.picture
    const sub=userObject.sub
    const user={
      _id:sub,
      _type:"user",
      userName:name,
      image:picture
    }
    try {
      dispatch({type:"AUTH",data:userObject})
      history.push("/")

    } catch (error) {
      console.log(error);
    }


  }
  const googleSuccess = async (res) => {
    console.log(res,"success")
  }
  const googleFailure = (error) => {
    console.log(error)
    console.log("Google Sign In Failure")
  }



  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className='classes.avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2} >
            {
              isSignup && (
                <>
                  <Input
                    name='firstName'
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half />
                  <Input
                    name='lastName'
                    label="Last Name"
                    handleChange={handleChange}
                    half />

                </>
              )}
            <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange}
              type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input
              name='confirmPassword'
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
              half />}
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleOAuthProvider clientId="742557779874-e548himtc2qsp929hu2ls2llrbe5uep6.apps.googleusercontent.com">
          <GoogleLogin
              onSuccess={response=>
              createOrGetUser(response)}
              onError={googleFailure} 
               /> 
          </GoogleOAuthProvider>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={swichtMode}>
                {isSignup ? "Already have an Acoount? Sign In" : "Don't have a account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth