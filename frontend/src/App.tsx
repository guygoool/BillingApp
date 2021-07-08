import React, { useEffect, useState } from 'react'
import Transaction from './components/Transaction'
import AddTransaction from './components/AddTransaction'
import { getTransactions, addTransaction, updateTransaction, deleteTransaction } from './API'

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = (): void => {
    getTransactions()
      .then(({ data: { transactions } }: ITransaction[] | any) => setTransactions(transactions))
      .catch((err: Error) => console.log(err))
  }

  const handleSaveTransaction = (formData: ITransaction): void => {
    addTransaction(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Transaction not saved")
        }
        else {
          fetchTransactions()
        }
      })
      .catch(err => console.log(err))
  }

  const handleUpdateTransaction = (transaction: ITransaction): void => {
    updateTransaction(transaction)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Transaction not updated")
        }
        else {
          fetchTransactions()
        }
      })
      .catch(err => console.log(err))
  }

  const handleDeleteTransaction = (_id: string): void => {
    deleteTransaction(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Transaction not deleted")
        }
        else {
          fetchTransactions()
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <main className='App'>
      <AddTransaction saveTransaction={handleSaveTransaction} />
      {transactions.map((transaction: ITransaction) => (
        <Transaction
          key={transaction._id}
          updateTransaction={handleUpdateTransaction}
          deleteTransaction={handleDeleteTransaction}
          transaction={transaction}
        />
      ))}
    </main>
  )
}

export default App