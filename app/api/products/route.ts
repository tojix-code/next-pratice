export async function GET() {
  const products = [
    { id: 1, name: "Smart Watch", price: 2999 },
    { id: 2, name: "Wireless Headphones", price: 1999 },
    { id: 3, name: "Bluetooth Speaker", price: 1499 },
    { id: 4, name: "Gaming Mouse", price: 899 },
    { id: 5, name: "Mechanical Keyboard", price: 2499 },
    { id: 6, name: "Laptop Stand", price: 799 },
    { id: 7, name: "USB-C Hub", price: 999 },
    { id: 8, name: "External Hard Drive", price: 4999 },
    { id: 9, name: "Smartphone Tripod", price: 699 },
    { id: 10, name: "Noise Cancelling Earbuds", price: 3499 }
  ]

  return Response.json(products)
}