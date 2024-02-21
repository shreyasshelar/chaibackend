//module js async import
import express from "express"

const app=express()

app.get('/',(req,res)=>{
    res.send("Server ready!")
})

app.get('/jokes',(req,res)=>{
    const jokes=[
        {
          "id": 1,
          "title": "Why was the math book sad?",
          "content": "Because it had too many problems."
        },
        {
          "id": 2,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field."
        },
        {
          "id": 3,
          "title": "What did the grape say when it got stepped on?",
          "content": "Nothing, it just let out a little wine."
        },
        {
          "id": 4,
          "title": "Why don't skeletons fight each other?",
          "content": "They don't have the guts."
        },
        {
          "id": 5,
          "title": "Why did the bicycle fall over?",
          "content": "Because it was two-tired."
        }
      ]
      res.send(jokes)
      
})

const port=process.env.PORT || 3001

app.listen(port,(req,res)=>{
    console.log(`Serve at https://localhost:${port}`);
})