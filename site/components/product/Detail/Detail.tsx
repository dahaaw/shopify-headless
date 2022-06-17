import { FC } from 'react'
import Image from 'next/image'
import { Product } from '@commerce/types/product'

interface ProductDetailProps {
  product: any
}

const Detail: FC<ProductDetailProps> = ({ product }) => {
  return (
    <main>
      <h2 className="font-semibold text-2xl mb-4">{product.name}</h2>
      <div className="flex flex-wrap items-center space-x-2 mb-2">
        <Image
          src="/images/misc/stars-active.svg"
          height={100}
          width={100}
          alt="Rating"
          layout="responsive"
        />
        <span className="text-yellow-500">9.3</span>
        <svg
          width="6px"
          height="6px"
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={3} cy={3} r={3} fill="#DBDBDB" />
        </svg>
        <span className="text-gray-400">
          <i className="fa fa-shopping-bag mr-2" /> 154 orders
        </span>
        <svg
          width="6px"
          height="6px"
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={3} cy={3} r={3} fill="#DBDBDB" />
        </svg>
        <span className="text-green-500">Verified</span>
      </div>
      <p className="mb-4 font-semibold text-xl">
        {`${product.price.value} ${product.price?.currencyCode}`}
      </p>
      <p className="mb-4 text-gray-500">product.description</p>
      <ul className="mb-5">
        <li className="mb-1">
          <b className="font-medium w-36 inline-block">Category:</b>
          <span className="text-gray-500">{product.productType}</span>
        </li>
        <li className="mb-1">
          <b className="font-medium w-36 inline-block">Brand:</b>
          <span className="text-gray-500">{product.vendor}</span>
        </li>
      </ul>
      <div className="flex flex-wrap mb-4">
        {product.options.map((opt: any, optKe: number) => (
          <div key={optKe} className="relative w-1/3 lg:w-1/4 mr-2 mb-4">
            <select className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 pr-5 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
              <option key={optKe + 1}>Select {opt.displayName}</option>
              {opt.values.map((optV: any, optVKe: number) => {
                return <option key={optVKe}>{optV.label}</option>
              })}
            </select>
            <i className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg
                width={24}
                height={24}
                className="fill-current h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </i>
          </div>
        ))}
      </div>
      {/* action buttons */}
      <div className="flex flex-wrap gap-2">
        {/* <a
          className="px-4 py-2 inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600"
          href="#"
        >
          Buy now
        </a> */}
        <a
          className="px-4 py-2 inline-block text-white bg-blue border border-blue rounded-md hover:bg-white hover:text-blue"
          href="#"
        >
          <i className="fa fa-shopping-cart mr-2" />
          Add to cart
        </a>
        <a
          className="px-4 py-2 inline-block text-blue border border-gray-300 rounded-md hover:bg-gray-100"
          href="#"
        >
          <i className="fa fa-heart mr-2" />
          Save for later
        </a>
      </div>
      {/* action buttons .//end */}
    </main>
  )
}

export default Detail
