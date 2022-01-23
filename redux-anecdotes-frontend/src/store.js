import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import anecdote_reducer, {initializeAnecdotes}  from './reducers/anecdoteReducer'
import notification_reducer from './reducers/notificationReducer'
import filter_reducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteService from './services/anecdotes'

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initializeAnecdotes(anecdotes))
)

const reducer = combineReducers({
    anecdotes: anecdote_reducer,
    notification: notification_reducer,
    filter: filter_reducer
  })
  

const store = createStore(reducer, 
                          composeWithDevTools(
                            applyMiddleware(thunk)
                            )
                          )

export default store