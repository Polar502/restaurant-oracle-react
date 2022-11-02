import express from 'express'
import cors from 'cors'
import morgan from "morgan";

import customersRoutes from './routes/customers.routes.js'
import employeesRoutes from './routes/employees.routes.js'

const app = express();

app.set("port", 5000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(customersRoutes);
app.use(employeesRoutes);

export default app;
