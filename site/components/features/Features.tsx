import { FC } from 'react'

const Features: FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Why choose us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className=" w-16 h-16 rounded-full bg-gray-100 text-blue-600 flex items-center justify-center">
                  <i className="text-blue fa fa-money-bill text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Reasonable prices</h5>
                <p className="text-gray-500">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className=" w-16 h-16 rounded-full bg-gray-100 text-blue-600 flex items-center justify-center">
                  <i className="text-blue fa fa-star text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Best quality</h5>
                <p className="text-gray-500">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className=" w-16 h-16 rounded-full bg-gray-100 text-blue-600 flex items-center justify-center">
                  <i className="text-blue fa fa-plane text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Worldwide shipping</h5>
                <p className="text-gray-500">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className=" w-16 h-16 rounded-full bg-gray-100 text-blue-600 flex items-center justify-center">
                  <i className="text-blue fa fa-users text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Customer satisfaction</h5>
                <p className="text-gray-500">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className=" w-16 h-16 rounded-full bg-gray-100 text-blue-600 flex items-center justify-center">
                  <i className="text-blue fa fa-thumbs-up text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Happy customers</h5>
                <p className="text-gray-500">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="flex mb-4">
              <div className="flex-shrink-0 mr-3">
                <span className=" w-16 h-16 rounded-full bg-gray-100 text-blue-600 flex items-center justify-center">
                  <i className="text-blue fa fa-box text-2xl" />
                </span>
              </div>
              <figcaption>
                <h5 className="font-semibold">Thousand items</h5>
                <p className="text-gray-500">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </figcaption>
            </figure>
          </div>
        </div>{' '}
        {/* grid .// */}
      </div>{' '}
      {/* container .// */}
    </section>
  )
}

export default Features
