import { Router } from "express"
import { addCustomer, getCustomers, updateCustomer, deleteCustomer } from "../controllers/customerController";

const router: Router = Router()

router.post("/customers", addCustomer)

router.get("/customers", getCustomers)

router.put("/customers/:id", updateCustomer)

router.delete("/customers/:id", deleteCustomer)

export default router