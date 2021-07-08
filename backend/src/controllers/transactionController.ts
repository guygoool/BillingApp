import { Response, Request } from "express"
import customerModel from "../models/customerModel"
import Transaction from "../models/transactionModel"
import { ITransaction } from "../types/transactionType"
import { ICustomer } from "../types/customerType"
import Customer from "../models/customerModel"

const addTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const
            body = req.body as ITransaction,
            customer_id = req.body.customer_id

        const customers: ICustomer[] = await Customer.find({ customer_id: customer_id })

        const transaction: ITransaction = new Transaction({
            customer: customers[0],
            total_price: body.total_price,
            currency: body.currency,
            cerdit_card_type: body.cerdit_card_type,
            cerdit_card_number: body.cerdit_card_number
        })

        const newTransaction: ITransaction = await transaction.save()

        res.status(200).json({ message: "Transaction added", transaction: newTransaction })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const getTransactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactions: ITransaction[] = await Transaction.find()
        res.status(200).json({ transactions })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const updateTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id }, body } = req
        const updateTransaction: ITransaction | null = await Transaction.findByIdAndUpdate({ _id: id }, body)

        res.status(200).json({
            message: "Transaction updated",
            transaction: updateTransaction
        })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const deleteTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedTransaction: ITransaction | null = await Transaction.findOneAndRemove({ _id: id })

        res.status(200).json({
            message: "Transaction deleted",
            transaction: deletedTransaction
        })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

export { addTransaction, getTransactions, updateTransaction, deleteTransaction }