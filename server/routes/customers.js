import { Router } from 'express'
import { getCustomers } from '../controllers/customers.js'

const router = Router()

router.get('/customers', getCustomers)

router.get('/customers/count')

router.get('/customers/:id')

router.post('/customers')

router.delete('/customers/:id')

router.put('/customers/:id')

export default router
