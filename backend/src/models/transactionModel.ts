import { model, Schema } from "mongoose"
import { ITransaction } from "../types/transactionType"

const transactionSchema: Schema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        total_price: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        cerdit_card_type: {
            type: String,
            required: true
        },
        cerdit_card_number: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default model<ITransaction>("Transaction", transactionSchema)