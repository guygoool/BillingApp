import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import transactionRoutes from "./routes/transactionRouter"
import customerRoutes from "./routes/customerRouter"
import { json } from "body-parser"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(json())
app.use(cors())
app.use(transactionRoutes)
app.use(customerRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pnecu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        throw error
    })