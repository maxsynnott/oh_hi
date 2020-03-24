import { createStore } from 'redux'
import { reducer } from './reduxLogic'

// Create a store with our reducer
const store = createStore(reducer)

export default store
