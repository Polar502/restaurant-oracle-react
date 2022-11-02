import { Router } from 'express'
import {
  getEmployees,
  getCustomer,
  getCustomers,
} from '../controllers/customers.js'

const router = Router()

// Ver todos los clientes
router.get('/customers', getCustomers)

// Ver editar un cliente
router.get('/customers/:id', getCustomer)

// Ver todos los empleados
router.get('/employees', getEmployees)

// // Ver un cliente
// router.get('/customers/:id')

// router.get('/customers/count')

// router.post('/customers')

// router.delete('/customers/:id')

// router.put('/customers/:id')

export default router
