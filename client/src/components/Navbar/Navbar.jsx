import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Avatar,
    CssBaseline
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import decode from "jwt-decode"
import PenIcon from "@material-ui/icons/Create"
import { Link, useHistory, useLocation } from 'react-router-dom';
import AddPostForm from '../AddPostForm'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    const dispatch = useDispatch()
    const history = useHistory();
    let location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push('/auth');
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout() /* if time is over log out */
        }

        setUser(JSON.parse(localStorage.getItem("profile")))  /*setUser null  */
    }, [location])




    return (


        <AppBar position="static" className={classes.appBar}
            elevation={0}> {/* static  right left top bottom unaffected */}
            <div className={classes.brandContainer}>


                <Typography
                    
                    color="secondary"
                    className={classes.title}
                    
                >
                    <a href="https://blogcityfrontend.herokuapp.com/"
                        style={{
                        color: "#AF9661", fontWeight: "600", 
                         fontSize:"39px"
                        }} >Blogcity</a>
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {/* If User log in Exist */}
                {user ?
                 (
                    <div className={classes.personalInfo}>

                        <IconButton edge="start" 
                            color="inherit" />

                        <Avatar  className='' alt={user.result.name} src={user.result.picture} >{user?.result.name.charAt(0)} </Avatar>
                        <Typography className='' style={{fontSize:"25px"}} >{user.result.name} </Typography>
                        <Button
                            compononet={Link} to="/auth"
                            style={{ background: "AF9661" }}
                            variant="contained" startIcon={<PenIcon />}
                            onClick={handleOpen}>
                            New Post
                        </Button>
                        <AddPostForm open={open} handleClose={handleClose} />
                        <Button onClick={logout} variant="contained" color="secondary">Log Out</Button>
                    </div>
                ) : 
                /* ELSE */
                (
                    <div className="signin-button">
                        <Button href="/auth" variant="contained" color="primary">Sign In</Button>
                    </div>

                )}
            </Toolbar>

        </AppBar>

    )
}

export default Navbar