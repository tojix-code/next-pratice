"use client"

import { useEffect, useState } from "react"

export default function ProductList() {

  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  useEffect(()=>{

    fetch("/api/products")
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setLoading(false)
      })
      .catch(()=>{
        setError("Failed to fetch data")
        setLoading(false)
      })

  },[])

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return(
    <div>
      {products.map((p:any)=>(
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  )
}