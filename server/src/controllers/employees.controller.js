import oracledb from 'oracledb'
import { config } from '../config.js'

oracledb.autoCommit = true

let connection

const closeConnection = async () => {
  if (connection) {
    try {
      await connection.close()
    } catch (error) {
      console.error(error)
    }
  }
}

export const getEmployees = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute('SELECT * FROM employees')
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const getEmployee = async (req, res) => {
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      'SELECT * FROM employees WHERE e_id = :id',
      [id]
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

// Pendiente
export const postEmployee = async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const address = req.body.phone
  const phone = req.body.address
  const salary = req.body.salary
  const job = req.body.job
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      'INSERT INTO employees (e_id, e_name, e_phone, e_address, e_salary, j_id) VALUES ( :id, :name, :phone, :address, :salary, :job)',
      [id, name, phone, address, salary, job]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const putEmployee = async (req, res) => {
  const body = req.body
  const id = req.params.id

  try {
    connection = await oracledb.getConnection(config)
    await connection.execute('UPDATE employees SET ? WHERE e_id = :id', [
      body,
      id,
    ])
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const deleteEmployee = async (req, res) => {
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute('DELETE FROM employees WHERE e_id = :id', [id])
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}
