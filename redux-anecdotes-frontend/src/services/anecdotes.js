import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log("getting anecdotes")
  const response = await axios.get(baseUrl)
  return response.data
}

const addNew = async (content) => {
  console.log("adding anecdote")
  const newAnecdote = {content, votes: 0}
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const addVote = async (anecdote) => {
  console.log("adding vote")

  const newvotes = anecdote.votes+1

  const response = await axios.put(baseUrl + '/' + anecdote.id, 
                                      {content: `${anecdote.content}`,
                                        id: `${anecdote.id}`,
                                        votes: newvotes
                                        }
                                  )

  return response.data
}

export default { getAll, addNew, addVote}