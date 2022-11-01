import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CustomersList = (prompt) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios('http://localhost:5000/customers')
      .then((response) => {
        if (response.status === 200) {
          const fetchData = response.data
          setData(fetchData)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h1>CustomersList Component</h1>
      {data.length > 0 &&
        data.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  )
}

export default CustomersList
