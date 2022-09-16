# Blog-city
### In this project users can make
* Create a new post
* Read a post
* Update a post
* Delete a post
* Sign up-Sign in 
* Google Sign in

![main-page-v2](https://user-images.githubusercontent.com/99674716/189086353-fd0d9e75-fca3-4991-8fd2-672167d40dc8.png)

## Live Demo
[Demo](https://blogcityfrontend.herokuapp.com/)

## API Usage

#### API Access Address

```
 https://blogcitybackend.herokuapp.com/
```
#### Post Schema
```
{
 title: String,
  subtitle: String,
  content: String,
  name:String,
  creator:String,
  tag: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
}

`No required fields`
```

| Method | Acces Point     | Explanation                |
| :-------- | :------- | :------------------------- |
| GET | `/posts` |Returns all the posts in the database as an array. Returns an empty array if there are no texts in the system. |
 GET | `/posts/:id` | Returns a text object that matches the given `id` value. Returns an error object when there is no match. |
| POST| `/posts` | Create a new post in the database |
| PATCH | `posts/:id` | Editing of the posts in the database. |
| DELETE | `posts/:id` | Deletion of the post in the database. |

## Installation 

* Git clone https://github.com/AkinGurler/Blog.git
* in project
```bash 
  npm install 
  
```
* Use your database or use my API
* Blog/client/src/api/index.js change api end point

## Used Technologies
**Front-End:** React, Redux, Material UI,CSS

**Back-End:** NodeJS, ExpressJS,MongoDB


[![Front-End](https://skills.thijs.gg/icons?i=react,redux,css,materialui&theme=light)](https://skills.thijs.gg)
[![Back-End](https://skills.thijs.gg/icons?i=nodejs,expressjs,mongodb&theme=light)](https://skills.thijs.gg)

## Gainz
* CRUD Operations
* Back-end Front-end entegration
* MongoDB-NodeJs entegration
* Creating Api
* Material UI
* React Forms
* Upload Project Heroku
* Authentication 
* Google authentication

  

## Communication

[![gmail](https://user-images.githubusercontent.com/99674716/185644867-49abb98d-3901-4011-ad5f-0b2d90bf024e.png)](mailto:akingurler.b@gmail.com)
[![whatsapp](https://user-images.githubusercontent.com/99674716/185643726-5f3fb3f2-bd11-4cd1-baf4-16cd6dae9d3b.png)](http://api.whatsapp.com/send?phone=905534600027)
