import { Response, Request } from "express"
import Customer from "../models/customerModel"
import { ICustomer } from "../types/customerType"

const addCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as ICustomer

        const customer: ICustomer = new Customer({
            customer_id: body.customer_id,
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            country: body.country,
            city: body.city,
            street: body.street,
            phone: body.phone
        })

        const newCustomer: ICustomer = await customer.save()

        res.status(200).json({ message: "Customer added", customer: newCustomer })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const getCustomers = async (req: Request, res: Response): Promise<void> => {
    try {
        const customers: ICustomer[] = await Customer.find()
        res.status(200).json({ customers })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const updateCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id }, body } = req
        const updateCustomer: ICustomer | null = await Customer.findByIdAndUpdate({ customer_id: id }, body)

        res.status(200).json({
            message: "Customer updated",
            customer: updateCustomer
        })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const deleteCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedCustomer: ICustomer | null = await Customer.findOneAndRemove({ customer_id: id })

        res.status(200).json({
            message: "Customer deleted",
            customer: deletedCustomer
        })
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

export { getCustomers, addCustomer, updateCustomer, deleteCustomer }