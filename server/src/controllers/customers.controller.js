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

export const getCustomers = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute('SELECT * FROM customers')
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const getCustomer = async (req, res) => {
  const id = req.query.id
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      'SELECT * FROM customers WHERE c_id = :id',
      [id]
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const postCustomer = async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const phone = req.body.phone
  const address = req.body.address

  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      'INSERT INTO customers (c_id, c_name, c_phone, c_address) VALUES ( :id , :name , :phone , :address )',
      [id, name, phone, address]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const putCustomer = async (req, res) => {
  const name = req.body.name
  const phone = req.body.phone
  const address = req.body.address
  const id = req.query.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      'UPDATE customers SET c_name = :name c_phone = :phone , c_address = :address WHERE c_id = :id',
      [name, phone, address, id]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const deleteCustomer = async (req, res) => {
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute('DELETE FROM customers WHERE c_id = :id', [id])
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}
