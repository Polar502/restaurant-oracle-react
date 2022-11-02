import oracledb from 'oracledb'
import { config } from '../config.js'

export const getCustomers = async (req, res) => {
  const connection = await oracledb.getConnection(config)
  const result = await connection.execute('SELECT * FROM customers')
  res.json(result.rows)
}

export const getCustomer = async (req, res) => {
  const connection = await oracledb.getConnection(config)
  const result = await connection.execute(
    'SELECT * FROM customers WHERE c_id = ?',
    [req.params.c_id]
  )
  res.json(result.rows)
}

export const getEmployees = async (req, res) => {
  const connection = await oracledb.getConnection(config)
  const result = await connection.execute('SELECT * FROM employees')
  res.json(result.rows)
}
