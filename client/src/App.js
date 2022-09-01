import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {
  CssBaseline,
  Container,
  Grid,
} from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PostList from './components/PostList'
import { useDispatch } from 'react-redux'
import { fetchPosts } from "./actions/post"
import PostDetails from './components/PostDetails'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar'

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

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchPosts());
  }, [dispatch]);



  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Router>
      <Container maxWidth="lg">{/* //area for posts */}
     
        <Navbar  />
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            
              <Switch>
                <Route exact path="/" component={PostList} />
                <Route exact path="/posts" component={PostList} />
                <Route exact path="/posts/:id" component={PostDetails} />
                <Route exact path="/auth"  component={Auth} />
              </Switch>
            
          </Grid>
        </Grid>
       
      </Container>
      </Router>


    </div>
  )
}

export default App