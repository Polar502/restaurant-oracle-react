import oracledb from 'oracledb'
import { config } from '../config.js'

export const getCustomers = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    const result = await connection.execute('SELECT * FROM customers')
    res.json(result.rows)
  } catch (error) {
    console.log(error)
  }
}

export const postCustomer = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      'INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES ( :id , :name , :address, :phone )',
      [req.body.id, req.body.name, req.body.address, req.body.phone]
    )
    console.log(result)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const putCustomer = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    await connection.execute('UPDATE customers SET ? WHERE c_id = :id', [
      req.body,
      req.params.id,
    ])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}

export const deleteCustomer = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(config)
    await connection.execute('DELETE FROM customers WHERE c_id = :id', [
      req.params.id,
    ])
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
  }
}
