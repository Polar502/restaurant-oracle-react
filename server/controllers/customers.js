import oracledb from 'oracledb'

export const getCustomers = (req, res) => {
  async function fetchDataCustomers() {
    try {
      const connection = await oracledb.getConnection({
        user: 'C##RESTAURANTDB',
        password: 'hola2022',
        connectString: '192.168.194.45:1521/xe',
      })

      const result = await connection.execute('SELECT * FROM employees')
      return result.rows
    } catch (error) {
      return error
    }
  }

  fetchDataCustomers()
    .then((deRes) => {
      res.send(deRes)
    })
    .catch((err) => {
      res.send(err)
    })
}
