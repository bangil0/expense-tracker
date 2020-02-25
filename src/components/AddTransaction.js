import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import uuid from 'uuid/v4'

const AddTransaction = ({ showAlert }) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: uuid(),
      text,
      amount: +amount
    }

    if (text === '' || amount === '') {
      return alert('Please enter the fields properly!')
    }

    addTransaction(newTransaction)

    setText('')
    setAmount('')
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            name='text'
            type='text'
            placeholder='Enter text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='text'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            name='amount'
            type='number'
            placeholder='Enter amount'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add</button>
      </form>
    </>
  )
}

export default AddTransaction
