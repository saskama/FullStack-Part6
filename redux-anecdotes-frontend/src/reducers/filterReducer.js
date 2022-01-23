
const initialState = ''

export const updateFilter = (filter) => {
    return {type:'FILTER', 
            data:{filter}
          }
  } 

const filter_reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
  
    switch (action.type) {
      case 'FILTER':
        return action.data.filter
      default: 
        return state
    }
  }

export default filter_reducer