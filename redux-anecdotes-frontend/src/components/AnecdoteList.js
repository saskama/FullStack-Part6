import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote} from '../reducers/anecdoteReducer' 
import { updateNotification} from '../reducers/notificationReducer'
import Notification from './Notification'

const AnecDoteList = () => {

    const notification = useSelector(state => state.notification)
    const filter = useSelector(state => state.filter)  

    const anecdotes = useSelector(state => state.anecdotes
                                                    .filter(anecdote => anecdote.content.toLocaleUpperCase().includes(filter.toLocaleUpperCase()))
                                                    .sort((a, b) => (a.votes > b.votes) ? -1 : 1))
    

    const dispatch = useDispatch()

    const vote = (anecdote) => {
      console.log('vote', anecdote.id)
      dispatch(voteAnecdote(anecdote))
      dispatch(updateNotification(`You voted '${anecdote.content}'`, 5))
    }

    return (
       <div>

            {notification == null ? null : <Notification />}
                {anecdotes.map(anecdote => <div 
                                                key={anecdote.id}>
                                                <div>
                                                    {anecdote.content}
                                                </div>
                                                <div>
                                                has {anecdote.votes}
                                                <button onClick={() => vote(anecdote)}>vote</button>
                                                </div>
                                            </div>
                                    )}
       </div>    
    )

}

export default AnecDoteList
