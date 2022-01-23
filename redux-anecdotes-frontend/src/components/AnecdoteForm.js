import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote} from '../reducers/anecdoteReducer' 
import { updateNotification} from '../reducers/notificationReducer' 

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        console.log('add', event.target)
        const text = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(text))

        dispatch(updateNotification(`Succesfully added anecdote '${text}'`, 10))

      }

    return (
       <div>
           <h2>create new</h2>
             <form onSubmit={add}>
                <div><input name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
       </div>    
    )

}

export default AnecdoteForm