import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext)

  const Transactions = () =>
    transactions.map(transaction => {
      const sign = transaction.amount < 0 ? '-' : '+'

      return (
        <li
          className={transaction.amount < 0 ? 'minus' : 'plus'}
          key={transaction.id}
        >
          {transaction.text}
          <span>
            {sign}${Math.abs(transaction.amount)}
          </span>
          <button
            className='delete-btn'
            onClick={() => deleteTransaction(transaction.id)}
          >
            x
          </button>
        </li>
      )
    })

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <Transactions />
      </ul>
    </>
  )
}

export default Transaction
