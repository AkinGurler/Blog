import axios from "axios"

const API = axios.create({ baseURL: 'https://blogcitybackend.herokuapp.com' });

/* for send to token backend so backend knows we actually logged in */
API.interceptors.request.use((req)=>{
  if(localStorage.getItem("profile")){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
  }

  return req;
})

const apiEndpoint = "http://localhost:5000/posts/";

export const fetchPosts=async () => await API.get("/posts")

export const fetchSinglePost = async (id) =>
  await API.get(`/posts/${id}`);

export const createPost =async(post)=>await API.post("/posts",post)

export const updatePost = async (id, updatedPost) =>
  await API.patch(`/posts/${id}`, updatedPost);

export const deletePost=async(id)=>
await API.delete(`/posts/${id}`)

export const signIn = async(formData) => await API.post('/user/signin', formData);
export const signUp = async(formData) =>await API.post('/user/signup', formData);