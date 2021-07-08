import { model, Schema } from "mongoose"
import { ICustomer } from "../types/customerType"

const customerSchema: Schema = new Schema(
    {
        customer_id: {
            type: String,
            required: true,
            unique: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default model<ICustomer>("Customer", customerSchema)