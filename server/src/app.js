import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import customersRoutes from './routes/customers.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import foodsRoutes from './routes/foods.routes.js'
import ordersRoutes from './routes/orders.routes.js'

const app = express()

app.set('port', 5000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(customersRoutes)
app.use(employeesRoutes)
app.use(foodsRoutes)
app.use(ordersRoutes)

export default app
