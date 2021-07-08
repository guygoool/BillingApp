import { Document } from "mongoose"

export interface ICustomer extends Document {
    customer_id: string
    first_name: string
    last_name: string
    email: string
    gender: {type: String, enum: ["Male", "Female"]}
    country: string
    city: string
    street: string
    phone: string
}