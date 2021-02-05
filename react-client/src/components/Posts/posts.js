import React, { Component } from "react";
import OnePost from "./OnePost/onePost";
import useStyles from "./styles";
import { useSelector } from "react-redux";

// class Posts extends Component {
//   render() {
//     const { classes } = useStyles();

//     return (
//       <React.Fragment>
//         <div className={classes.actionDiv}>Posts</div>
//         <OnePost />
//         <OnePost />
//       </React.Fragment>
//     );
//   }
// }

// export default Posts;

function Posts() {
  const classes = useStyles();
  // get posts from redux store
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <React.Fragment>
      <div className={classes.actionDiv}>Posts</div>
      <OnePost />
      <OnePost />
    </React.Fragment>
  );
}

export default Posts;
