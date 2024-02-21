//to use .env
require('dotenv').config()
const express = require('express') //common js sync import
//import express from "express"

const app = express()

//server at port 4000 on this machine 
const port = 4000
//when production may be another server with diff port so use .env for it

const githubData={
  "login": "shreyasshelar",
  "id": 90932395,
  "node_id": "MDQ6VXNlcjkwOTMyMzk1",
  "avatar_url": "https://avatars.githubusercontent.com/u/90932395?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shreyasshelar",
  "html_url": "https://github.com/shreyasshelar",
  "followers_url": "https://api.github.com/users/shreyasshelar/followers",
  "following_url": "https://api.github.com/users/shreyasshelar/following{/other_user}",
  "gists_url": "https://api.github.com/users/shreyasshelar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shreyasshelar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shreyasshelar/subscriptions",
  "organizations_url": "https://api.github.com/users/shreyasshelar/orgs",
  "repos_url": "https://api.github.com/users/shreyasshelar/repos",
  "events_url": "https://api.github.com/users/shreyasshelar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shreyasshelar/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-17T19:19:36Z",
  "updated_at": "2024-02-21T12:54:20Z"
}


//to serve 'get request' coming from client on / and always listen at / 
//if request arrrived send response in terms of message to client 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//same for /twitter
app.get('/twitter', (req, res) => {
    res.send('Hello twitter')
  })

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at D website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})


//to take port from .env
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})