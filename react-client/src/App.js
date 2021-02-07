import "./App.css";
import React, { useState, useEffect } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import useStyles from "./styles";
import { getPosts } from "./redux/index";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
              Memories
            </Typography>
            <img
              className={classes.image}
              src={memories}
              alt="icon"
              height="60"
            />
          </AppBar>
        </Container>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    </Provider>
  );
}

export default App;
