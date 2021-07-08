import React, { useState } from "react"

type Props = {
    saveTransaction: (formData: ITransaction | any) => void
}

const AddTransaction: React.FC<Props> = ({ saveTransaction }) => {
    const [formData, setFormData] = useState<ITransaction | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Form' onSubmit={() => saveTransaction(formData)}>
            <div>
                <div>
                    <label htmlFor='customer_id'>Customer Id</label>
                    <input onChange={handleForm} type='text' id='customer_id' />
                </div>
                <div>
                    <label htmlFor='total_price'>Total price</label>
                    <input onChange={handleForm} type='text' id='total_price' />
                </div>
                <div>
                    <label htmlFor='currency'>Currency</label>
                    <input onChange={handleForm} type='text' id='currency' />
                </div>
                <div>
                    <label htmlFor='cerdit_card_type'>Credit card type</label>
                    <input onChange={handleForm} type='text' id='cerdit_card_type' />
                </div>
                <div>
                    <label htmlFor='cerdit_card_number'>Cerdit card number</label>
                    <input onChange={handleForm} type='text' id='cerdit_card_number' />
                </div>
            </div>
            <button disabled={!!!formData ? true : false} >Add Transaction</button>
        </form>
    )
}

export default AddTransaction