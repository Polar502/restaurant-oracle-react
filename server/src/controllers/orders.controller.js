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

export const getOrders = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute('SELECT * FROM view_orders order by ID')
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const getOrder = async (req, res) => {
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      'SELECT * FROM view_orders WHERE id = :id'[id]
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const getPending = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      "SELECT * FROM view_orders WHERE status LIKE 'PENDIENTE' order by ID"
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const getReady = async (req, res) => {
  try {
    connection = await oracledb.getConnection(config)
    const result = await connection.execute(
      "SELECT * FROM view_orders WHERE status LIKE 'ENTREGADO' order by ID"
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const postOrder = async (req, res) => {

  const id = req.body.id
  const type = req.body.type
  const total = req.body.total

  try {
    connection = await oracledb.getConnection(config)
    const restult = await connection.execute(
      "INSERT INTO orders (c_id, o_type, o_total, o_status) VALUES (:id, :type, :total, 'PENDIENTE')",
      [ id, type, total]
    )
    res.json(restult)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}

export const putOrder = async (req, res) => {
  const status = req.body.status
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute(
      'UPDATE view_orders SET status = :status WHERE id = :id',
      [status, id]
    )
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  }
}

export const deleteOrder = async (req, res) => {
  const id = req.params.id
  try {
    connection = await oracledb.getConnection(config)
    await connection.execute('DELETE FROM view_orders WHERE id = :id', [id])
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
  } finally {
    closeConnection()
  }
}
