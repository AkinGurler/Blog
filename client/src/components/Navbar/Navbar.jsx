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
import { Link } from 'react-router-dom';
import AddPostForm from '../AddPostForm'



const useStyles = makeStyles((theme) => ({

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
    const user = null;
    return (
        <div>
            <CssBaseline />
            <AppBar position="static" style={{
                background: "#252e3e"
            }}
                elevation={0}> {/* static  right left top bottom unaffected */}
                <Toolbar>
                    {user ? (
                        <div className=''>
                            <IconButton edge="start" className={classes.container}
                                color="inherit" />
                            <Typography
                                variant="h4"
                                color="secondary"
                                className={classes.title}
                            >
                                <a href="http://localhost:3000/posts" style={{ color: "#AF9661" }} >Blogcity</a>
                            </Typography>
                            <Avatar className='' alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)} </Avatar>
                            <Typography className='' variant="h6" >{user.result.name} </Typography>
                            <Button
                                compononet={Link} to="/auth"
                                style={{ background: "AF9661" }}
                                variant="contained" startIcon={<PenIcon />}
                                onClick={handleOpen}>
                                New Post
                            </Button>
                            <AddPostForm open={open} handleClose={handleClose} />
                            <Button variant="contained" color="secondary">Log Out</Button>
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
                            <Button  href="/auth" variant="contained" color="primary">Sign In</Button>
                           
                        </div>

                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar