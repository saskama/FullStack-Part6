
const initialState = null


export const updateNotification =  (notification, timeout) => {

  return async dispatch => {
    dispatch({
      type: 'UPDATE',
      data: {notification},
    })

    setTimeout(() => {
      dispatch({type:'REMOVE'})
      }, timeout*1000)

  }
}
 

const notification_reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch (action.type) {
      case 'UPDATE':
        return action.data.notification
      case 'REMOVE':
        return null
      default: 
        return state
    }
  }

export default notification_reducer