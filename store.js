import { createStore } from 'redux'
import { reducer } from './reduxLogic'

// Create a store with our reducer
const store = createStore(reducer)

window.store = store

export default store
