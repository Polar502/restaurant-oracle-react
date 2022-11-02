import oracledb from 'oracledb'
import { config } from '../config.js'

export const getEmployees = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    const result = await connection.execute('SELECT * FROM employees')
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
}

// Pendiente
export const postEmployee = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      'INSERT INTO employees (c_id, c_name, c_address, c_phone) VALUES ( :id , :name , :address, :phone )',
      [req.body.id, req.body.name, req.body.address, req.body.phone]
    )
    console.log(result)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const putEmployee = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    await connection.execute('UPDATE employees SET ? WHERE e_id = :id', [
      req.body,
      req.params.id,
    ])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    await connection.execute('DELETE FROM employees WHERE e_id = :id', [
      req.params.id,
    ])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}
