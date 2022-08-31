import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { GoogleLogin } from "react-google-login"
import Icon from "./Icon"
import useStyles from './styles'
import Input from "./Input"

const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setisSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})

  }
  const swichtMode = () => {
    setisSignup((prevMode) => !prevMode)

  }
  const googleSuccess = async (res) => {
    console.log(res)
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
          <GoogleLogin
            clientId="1050927086971-vl4gjb31ke80ac41l2m0ne67gvt38peq.apps.googleusercontent.com"
            render={(renderProps) => (/* how button looks like */

              <Button
                className={classes.googleButton}
                 color="primary" fullWidth 
                 onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify='flex-end'>
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