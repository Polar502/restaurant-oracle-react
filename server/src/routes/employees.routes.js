import { Router } from 'express'
import {
  getEmployees,
  postEmployee,
  putEmployee,
  deleteEmployee,
} from '../controllers/employees.controller.js'

const router = Router()

// ===== Rutas y Metodos para Empleados =====
// Ver todos los empleados
router.get('/employees', getEmployees)

// Guardar un nuevo empleado
router.post('/employees', postEmployee)

// Editar un empleado
router.put('/employees/:id', putEmployee)

// Eliminar un empleado
router.delete('/employees/:id', deleteEmployee)

export default router
