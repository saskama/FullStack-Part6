const express = require('express')
const app = express()

app.use(express.json())

let anecdotes = [
        {
          "content": "If it hurts, do it more often",
          "id": "47145",
          "votes": 0
        },
        {
          "content": "Adding manpower to a late software project makes it later!",
          "id": "21149",
          "votes": 0
        },
        {
          "content": "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
          "id": "69581",
          "votes": 0
        },
        {
          "content": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
          "id": "36975",
          "votes": 0
        },
        {
          "content": "Premature optimization is the root of all evil.",
          "id": "25170",
          "votes": 0
        },
        {
          "content": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
          "id": "98312",
          "votes": 5
        }
]


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/anecdotes', (req, res) => {
  res.json(anecdotes)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})