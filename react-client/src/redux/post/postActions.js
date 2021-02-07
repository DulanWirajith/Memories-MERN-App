import * as api from "../../api/api_calls";

// // action creators
// const getPosts = () => {
//   const action = { type: "FETCH_ALL", payload: [] };
//   return action;
// };

// action creators using redux-thunk

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // api
    //   .fetchPosts()
    //   .then((response) => {
    //     console.log("response is" + response);
    //     dispatch({ type: "FETCH_ALL", payload: response });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log("response is" + data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
