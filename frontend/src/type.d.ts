interface ITransaction {
    _id: string
    customer: ICustomer
    customer_id: string
    total_price: string
    currency: string
    cerdit_card_type: string
    cerdit_card_number: string
}

interface ICustomer {
    customer_id: string
    first_name: string
    last_name: string
    email: string
    gender: { type: String, enum: ["Male", "Female"] }
    country: string
    city: string
    street: string
    phone: string
}

interface TransactionProps {
    transaction: ITransaction
}

type ApiDataType = {
    message: string
    status: string
    transactions: ITransaction[]
    transaction?: ITransaction
}