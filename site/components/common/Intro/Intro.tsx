import { FC } from 'react'

const Intro: FC<{}> = () => {
  return (
    <>
      {/*  INTRO SECTION  */}
      <section className="bg bg-blue">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="pl-5 py-10 sm:py-20">
            <article className="my-10">
              <h1 className="text-3xl md:text-5xl text-white font-bold">
                Best products &amp; <br />
                brands in our store
              </h1>
              <p className="text-lg text-white font-normal mt-4 mb-6">
                Trendy Products, Factory Prices, Excellent Service
              </p>
              <div>
                <a
                  className="px-4 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600"
                  href="#"
                >
                  Discover
                </a>
                <a
                  className="px-4 py-2 ml-2 inline-block font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white"
                  href="#"
                >
                  Learn more
                </a>
              </div>
            </article>
          </div>
        </div>
        {/* container //end */}
      </section>
      {/*  INTRO SECTION //END */}
    </>
  )
}

export default Intro
