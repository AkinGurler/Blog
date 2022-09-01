import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' });



export const fetchPosts=async () => await API.get("/posts")

export const fetchSinglePost = async (id) =>
  await API.get(`/posts/${id}`);

export const createPost =async(post)=>await API.post("/posts",post)

export const updatePost = async (id, updatedPost) =>
  await API.patch(`/posts/${id}`, updatedPost);

export const deletePost=async(id)=>
await API.delete(`/posts/${id}`)

export const signIn=(formData)=>API.post("/users/signin",formData)
export const signUp=(formData)=>API.post("/users/signup",formData)