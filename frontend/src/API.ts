import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const addTransaction = async (
    formData: ITransaction
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const transaction = {
            customer_id: formData.customer_id,
            total_price: formData.total_price,
            currency: formData.currency,
            cerdit_card_type: formData.cerdit_card_type,
            cerdit_card_number: formData.cerdit_card_number
        }
        console.log("transaction", transaction)
        const saveTransaction: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/transactions",
            transaction
        )
        return saveTransaction
    } catch (error) {
        throw new Error(error)
    }
}

export const getTransactions = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const transactions: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/transactions"
        )
        return transactions
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTransaction = async (
    transaction: ITransaction
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const transactionUpdate: Pick<ITransaction, "total_price"> = {
            total_price: transaction.total_price
        }
        const updatedTransaction: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/transactions/${transaction._id}`,
            transactionUpdate
        )
        return updatedTransaction
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteTransaction = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTransaction: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/transactions/${_id}`
        )
        return deletedTransaction
    } catch (error) {
        throw new Error(error)
    }
}