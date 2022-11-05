import { Router } from 'express'
import {
  getOrder,
  getOrders,
  getPending,
  getReady,
  postOrder,
  putOrder,
  deleteOrder,
} from '../controllers/orders.controller.js'

const router = Router()

// ===== Rutas y Metodos para Ordenes =====
// Ver todas las Ordenes
router.get('/orders', getOrders)

// Traer los pedidos pendientes
router.get('/orders/pending', getPending)

// Traer los pedidos entregados
router.get('/orders/ready', getReady)

// Ver una Orden
router.get('/orders/:id', getOrder)

// Guardar una nueva Orden
router.post('/orders', postOrder)

// Cambier estados de la orden
router.put('/orders/:id', putOrder)

// Eliminar una Orden
router.delete('/ordenes/:id', deleteOrder)

export default router
