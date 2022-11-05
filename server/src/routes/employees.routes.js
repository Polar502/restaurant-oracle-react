import { Router } from 'express'
import {
  getEmployees,
  getEmployee,
  getActive,
  getDeactivated,
  postEmployee,
  putEmployee,
  deleteEmployee,
} from '../controllers/employees.controller.js'

const router = Router()

// ===== Rutas y Metodos para Empleados =====
// Ver todos los empleados
router.get('/employees', getEmployees)

// Ver trabajadores activos
router.get('/employees/active', getActive)

// Ver trabajadores inactivos
router.get('/employees/deactivated', getDeactivated)

// Ver un empleado
router.get('/employees/:id', getEmployee)

// Guardar un nuevo empleado
router.post('/employees', postEmployee)

// Editar un empleado
router.put('/employees/:id', putEmployee)

// Eliminar un empleado
router.delete('/employees/:id', deleteEmployee)

export default router
