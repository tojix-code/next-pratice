import ProductList from "@/components/ui/ProductList";

export default function ProductsPage(){
  return(
    <div className="p-6">
      <h1 className="text-2xl mb-4">Products</h1>

      <ProductList />

    </div>
  )
}