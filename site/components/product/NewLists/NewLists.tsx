import React from 'react'
import { ProductCard } from '@components/product'

export default function NewLists({ title, products = [] }) {
  console.log({ products })
  return (
    <section className="bg-gray-100 py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((pdk) => (
            <ProductCard product={pdk} />
          ))}
        </div>
      </div>
    </section>
  )
}
