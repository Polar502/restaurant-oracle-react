import { Router } from 'express'
import {
  getCustomers,
  getCustomer,
  getActive,
  getDeactivated,
  postCustomer,
  putCustomer,
  deleteCustomer,
} from '../controllers/customers.controller.js'

const router = Router()

// ===== Rutas y Metodos para Clientes =====
// Ver todos los clientes
router.get('/customers', getCustomers)

// Ver cliente activos
router.get('/customers/active', getActive)

// Ver clientes desctivo
router.get('/customers/deactivated', getDeactivated)

// Ver un cliente
router.get('/customers/:id', getCustomer)

// Guardar un nuevo clientes
router.post('/customers', postCustomer)

// Editar un cliente
router.put('/customers/:id', putCustomer)

// Eliminar un cliente
router.delete('/customers/:id', deleteCustomer)

export default router
