import { Document, Schema } from "mongoose"
import { ICustomer } from "./customerType";

export interface ITransaction extends Document {
    customer: ICustomer
    total_price: string
    currency: string
    cerdit_card_type: string
    cerdit_card_number: string
}