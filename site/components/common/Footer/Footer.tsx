import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'
import Image from 'next/image'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className="bg-blue">
      {/* section footer top */}
      <section className="py-12 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap">
            <aside className="w-full md:w-1/3 lg:w-1/4 mb-5">
              <Logo />
              <p className="my-4">
                © 2022 H&. <br />
                All rights reserved.
              </p>
            </aside>
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold"> Store </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Join us
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Find store
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Partnership
                  </a>
                </li>
              </ul>
            </aside>
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto mb-5">
              <h3 className="font-semibold"> About </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Our history
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Our team
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Offices
                  </a>
                </li>
              </ul>
            </aside>
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto  mb-5">
              <h3 className="font-semibold"> Help </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Submit ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Refunds
                  </a>
                </li>
              </ul>
            </aside>
            {/* col .// */}
            <aside className="w-1/2 sm:w-auto flex-auto  mb-5">
              <h3 className="font-semibold"> Links </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Our terms
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Privacy setting
                  </a>
                </li>
                <li>
                  <a href="#" className="opacity-70 hover:opacity-100">
                    Sign up
                  </a>
                </li>
              </ul>
            </aside>
            {/* col .// */}
            <aside className="w-full md:w-1/2 lg:w-1/4 mb-5">
              <h3 className="font-semibold mb-2">Newsletter</h3>
              <p className="text-white text-opacity-70 mb-5">
                Stay in touch with latest updates about our products and offers
              </p>
              {/* email start*/}
              <form className="flex w-80">
                <input
                  className="text-black w-full appearance-none border border-transparent bg-gray-100 py-2 px-3 rounded-tl-md rounded-bl-md"
                  type="email"
                  placeholder="Email"
                />
                <button className="px-4 py-2 text-blue-600 bg-yellow-500 border border-transparent rounded-tr-md rounded-br-md hover:bg-blue">
                  Join
                </button>
              </form>
              {/* email end*/}
            </aside>
            {/* col .// */}
          </div>
          {/* grid .// */}
        </div>
        {/* container .// */}
      </section>
      {/* section footer top end */}
      {/* section footer bottom  */}
      <section className="bg-blue py-6 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="lg:flex justify-between">
            <div className="mb-3">
              <Image
                src="/images/misc/payments.png"
                height={24}
                width={'100%'}
                layout="responsive"
                alt="payment method"
              />
            </div>
            {/* col .// */}
            <div className="space-x-6">
              <nav className="text-sm space-x-4">
                <a href="#" className="opacity-70 hover:opacity-100">
                  Support
                </a>
                <a href="#" className="opacity-70 hover:opacity-100">
                  Privacy &amp; Cookies
                </a>
                <a href="#" className="opacity-70 hover:opacity-100">
                  Accessibility
                </a>
              </nav>
            </div>
            {/* col .// */}
          </div>
          {/* grid .// */}
        </div>
        {/* container .// */}
      </section>
      {/* section footer bottom  end */}
    </footer>

    // <footer className={rootClassName}>
    //   <Container>
    //     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
    //       <div className="col-span-1 lg:col-span-2">
    //         <Link href="/">
    //           <a className="flex flex-initial items-center font-bold md:mr-24">
    //             <span className="rounded-full border border-accent-6 mr-2">
    //               <Logo />
    //             </span>
    //             <span>ACME</span>
    //           </a>
    //         </Link>
    //       </div>
    //       <div className="col-span-1 lg:col-span-8">
    //         <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
    //           {[...links, ...sitePages].map((page) => (
    //             <span key={page.url} className="py-3 md:py-0 md:pb-4">
    //               <Link href={page.url!}>
    //                 <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
    //                   {page.name}
    //                 </a>
    //               </Link>
    //             </span>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="col-span-1 lg:col-span-2 flex items-start lg:justify-end text-primary">
    //         <div className="flex space-x-6 items-center h-10">
    //           <a
    //             className={s.link}
    //             aria-label="Github Repository"
    //             href="https://github.com/vercel/commerce"
    //           >
    //             <Github />
    //           </a>
    //           <I18nWidget />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
    //       <div>
    //         <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
    //       </div>
    //       <div className="flex items-center text-primary text-sm">
    //         <span className="text-primary">Created by</span>
    //         <a
    //           rel="noopener noreferrer"
    //           href="https://vercel.com"
    //           aria-label="Vercel.com Link"
    //           target="_blank"
    //           className="text-primary"
    //         >
    //           <Vercel
    //             className="inline-block h-6 ml-3 text-primary"
    //             alt="Vercel.com Logo"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
