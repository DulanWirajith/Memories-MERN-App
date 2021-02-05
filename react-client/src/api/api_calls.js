import axios from "axios";

const url = "http://localhost:5000/api/get_posts";

export function fetchPosts(params) {
  axios.get(url);
}
export function createPost(newPost) {
  axios.post(url, newPost);
}
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
