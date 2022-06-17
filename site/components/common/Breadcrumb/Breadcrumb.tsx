import Link from 'next/link'
import { FC } from 'react'

const Breadcrumb: FC = () => {
  return (
    <section className="bg-blue py-4">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* breadcrumbs start */}
        <ol className="inline-flex flex-wrap text-white space-x-1 md:space-x-3 items-center">
          <li className="inline-flex items-center">
            <Link href="#">
              <div className="text-white hover:text-gray-600 cursor-pointer">
                Home
              </div>
            </Link>
            <i className="ml-3 text-gray-400 fa fa-chevron-right" />
          </li>
          <li className="inline-flex items-center" aria-current="page">
            <Link href="#">
              <div className="text-white hover:text-gray-600 cursor-pointer">
                Clothes
              </div>
            </Link>
            <i className="ml-3 text-gray-400  fa fa-chevron-right" />
          </li>
          <li className="inline-flex items-center" aria-current="page">
            <Link href="#">
              <div className="text-white hover:text-gray-600 cursor-pointer">
                Men's wear
              </div>
            </Link>
            <i className="ml-3 text-gray-400  fa fa-chevron-right" />
          </li>
          <li className="inline-flex items-center"> Detail </li>
        </ol>
        {/* breadcrumbs end */}
      </div>
      {/* container .// */}
    </section>
  )
}

export default Breadcrumb
