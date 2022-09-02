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

import PenIcon from "@material-ui/icons/Create"
import { Link, useHistory, useLocation } from 'react-router-dom';
import AddPostForm from '../AddPostForm'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';




const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    profile:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },

    title: {
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing(6),
    }

}))


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
    console.log(user);
    const dispatch=useDispatch()
    const history=useHistory();
    let location = useLocation();

    const logout=()=>{
        dispatch({type:"LOGOUT"});
        history.push('/auth'); 
        setUser(null)
    }

    useEffect(() => {
      /* const token=user?.sub */
    
    setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location])
    



    return (
        <div /* className={classes.profile} */>
            
            <AppBar position="static" className={classes.appBar}
                 elevation={0}> {/* static  right left top bottom unaffected */} 
                  <Typography
                                variant="h4"
                                color="secondary"
                                className={classes.title}
                            >
                                <a href="http://localhost:3000/posts" style={{ color: "#AF9661" }} >Blogcity</a>
            </Typography>
                <Toolbar  className={classes.toolbar}>
                    {user ? (
                        <div className=''>
                            
                            <IconButton edge="start" /* className={classes.container} */
                                color="inherit" />
                           
                            <Avatar className='' alt={user.result.name} src={user.result.picture} >{user.result.name} </Avatar>
                            <Typography className='' variant="h6" >{user.result.name} </Typography>
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
                    ) : (
                        <div className="">
                            <IconButton edge="start" className={classes.container}
                                color="inherit" />
                            <Typography
                                variant="h4"
                                color="secondary"
                                className={classes.title}
                            >
                                <a href="http://localhost:3000/posts" style={{ color: "#AF9661" }} >Blogcity</a>
                            </Typography>
                            <Button href="/auth" variant="contained" color="primary">Sign In</Button>

                        </div>

                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar