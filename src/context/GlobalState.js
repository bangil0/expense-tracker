import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial state
export const initialState = {
  transactions: []
}

//create context
export const GlobalContext = createContext(initialState)

//Provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = id =>
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })

  const addTransaction = transaction =>
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })

  const editTransaction = transaction =>
    dispatch({
      type: 'EDIT_TRANSACTION',
      payload: transaction
    })

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        editTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider