import React, { useState,useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"

import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core"
import PenIcon from "@material-ui/icons/Create"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PostList from './components/PostList'
import AddPostForm from './components/AddPostForm'
import { useDispatch } from 'react-redux'
import { fetchPosts } from "./actions/post"
import PostDetails from './components/PostDetails'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(6),
  }

}))


const App = () => {
  const [open, setOpen] = useState(false)
  const dispatch=useDispatch();

  useEffect(() => {
    
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">{/* //area for posts */}
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.container}
              color="inherit" />
            <Typography
              variant="h4"
              color="secondary"
              className={classes.title}
            >
              <a href="https://blogcity-frontend.herokuapp.com/posts">Blogcity</a>
            </Typography>
            <Button color="primary"
              variant="contained" startIcon={<PenIcon />}
              onClick={handleOpen}>
              New Post
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/posts" component={PostList} />
                <Route exact path="/posts/:id" component={PostDetails} />

              </Switch>

            </Router>
          </Grid>
        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose} />
    </div>
  )
}

export default App