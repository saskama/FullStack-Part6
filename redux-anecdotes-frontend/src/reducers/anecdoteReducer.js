import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)


export const createAnecdote = content => {
  console.log(content)
  return async dispatch => {
    const newNote = await anecdoteService.addNew(content)
    
    console.log(newNote)
    dispatch({
      type: 'ADD',
      data: newNote,
    })
  }
}


export const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedNote = await anecdoteService.addVote(anecdote)
    dispatch({
      type: 'VOTE',
      data: updatedNote.id,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const anecdote_reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes+1}
      return state.map(ancedote =>  ancedote.id !== id ? ancedote : changedAnecdote)
    case 'ADD':
      return state.concat(action.data) 
    case 'INIT_ANECDOTES':
      return action.data 
    default: 
      return state
  }
}

export default anecdote_reducer