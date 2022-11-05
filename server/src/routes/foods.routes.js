import { Router } from 'express'
import { getFoods } from '../controllers/foods.controller.js'

const router = Router()

// ===== Rutas y Metodos para Comidas =====
// Ver todos los clientes
router.get('/foods', getFoods)

export default router
