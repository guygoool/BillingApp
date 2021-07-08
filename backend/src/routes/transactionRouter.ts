import { Router } from "express"
import { addTransaction, getTransactions, updateTransaction, deleteTransaction } from "../controllers/transactionController";

const router: Router = Router()

router.post("/transactions", addTransaction)

router.get("/transactions", getTransactions)

router.put("/transactions/:id", updateTransaction)

router.delete("/transactions/:id", deleteTransaction)

export default router