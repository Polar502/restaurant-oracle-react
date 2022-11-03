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

export const postCustomer = async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const address = req.body.id
  const phone = req.body.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      'INSERT INTO customers (c_id, c_name, c_address, c_phone) VALUES ( :id , :name , :address, :phone )',
      [id, name, address, phone]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const putCustomer = async (req, res) => {
  const body = req.body
  const id = req.query.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute('UPDATE customers SET :body WHERE c_id = :id', [
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
