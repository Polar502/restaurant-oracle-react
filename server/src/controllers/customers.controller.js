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

// Obtener todos los clientes
export const getCustomers = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      'SELECT * FROM customers order by c_id'
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

// obtener clietnes activos
export const getActive = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      "SELECT * FROM customers WHERE c_status LIKE 'ACTIVO order by c_id'"
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

// Obtener clientes descativos
export const getInactive = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      "SELECT * FROM customers WHERE c_status LIKE 'INACTIVO order by c_id'"
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

// Obtener un solo cliente
export const getCustomer = async (req, res) => {
  const id = req.params.id
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

// Insertar un cliente
export const postCustomer = async (req, res) => {
  const name = req.body.name
  const phone = req.body.phone
  const address = req.body.address

  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      "INSERT INTO customers (c_name, c_phone, c_address, c_status) VALUES (:name , :phone , :address , 'ACTIVO')",
      [name, phone, address]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

// Actualizar un cliente
export const putCustomer = async (req, res) => {
  const status = req.body.status
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      'UPDATE customers SET c_status = :status WHERE c_id = :id',
      [status, id]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  }
}

// Eliminar un cliente
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
