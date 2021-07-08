import React from "react"

type Props = TransactionProps & {
    updateTransaction: (formData: ITransaction | any) => void
    deleteTransaction: (_id: string) => void
}

const Transaction: React.FC<Props> = ({ transaction, updateTransaction, deleteTransaction }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        transaction.total_price = e.currentTarget.value
    }
    return (
        <div>
            <div>
                <label htmlFor='total_price'>Total price</label>
                <input onChange={e => handleChange(e)} type='text' id='total_price' defaultValue={transaction.total_price} />
                <span>{transaction.currency}</span>
            </div>
            <div>
                <button onClick={() => updateTransaction(transaction)}>Update</button>
                <button onClick={() => deleteTransaction(transaction._id)}>Delete</button>
            </div>
        </div>
    )
}

export default Transaction