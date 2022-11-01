const express = require('express')
const oracledb = require('oracledb')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/customers', (req, res) => {
  async function fetchDataCustomers() {
    try {
      const connection = await oracledb.getConnection({
        user: 'C##RESTAURANTDB',
        password: 'hola2022',
        connectString : '192.168.194.45:1521/xe',
      })

      const result = await connection.execute('SELECT * FROM customers')
      return result
    } catch (error) {
      return error
    }
  }

  fetchDataCustomers().then(deRes => {
    res.send(deRes)
  }).catch(err => {
    res.send(err)
  })
})

app.listen(5000, () => {
  console.log(`listening on port ${PORT}`)
})
