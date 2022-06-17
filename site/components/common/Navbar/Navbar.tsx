import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <>
        {/*  COMPONENT: HEADER */}
        <header className="bg-white py-3 border-b">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-wrap items-center">
              {/* Brand */}
              <div className="flex-shrink-0 mr-5">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              {/* Brand .//end */}
              {/* Search */}
              <div className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
                <input
                  className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                  type="text"
                  placeholder="Search"
                />
                <button
                  type="button"
                  className="px-4 py-2 inline-block text-white border border-transparent bg-blue rounded-md hover:bg-blue-700"
                >
                  <i className="fa fa-search" />
                </button>
              </div>
              {/* Search .//end */}
              {/* Actions */}
              <div className="flex items-center space-x-2 ml-auto">
                <UserNav />
              </div>
              {/* Actions .//end */}
              {/* mobile-only */}
              <div className="lg:hidden ml-2">
                <button
                  type="button"
                  className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
                >
                  <span className="sr-only">Open menu</span>
                  <i className="fa fa-bars fa-lg" />
                </button>
              </div>
              {/* mobile-only //end  */}
            </div>
            {/* flex grid //end */}
          </div>
          {/* container //end */}
        </header>
        <nav className="relative shadow-sm">
          <div className="container max-w-screen-xl mx-auto px-4">
            {/* Bottom */}
            <div className="hidden lg:flex flex-1 items-center py-1">
              <Link href="/">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/Category">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  Category
                </div>
              </Link>
              <Link href="/About">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="/Services">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  Services
                </div>
              </Link>
              <Link href="/Projects">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  Projects
                </div>
              </Link>
              <Link href="/Offers">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  Offers
                </div>
              </Link>
              <Link href="/Others">
                <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  Others
                </div>
              </Link>
            </div>
            {/* Bottom //end */}
          </div>
          {/* container //end */}
        </nav>
        {/*  COMPONENT: HEADER //END */}
      </>

      {/* ORI */}
      {/* <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/">
            <Link className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
          </Link>

          <nav className={s.navMenu}>
            <Link href="/search">
              <Link className={s.link}>All</Link>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <Link className={s.link}>{l.label}</Link>
              </Link>
            ))}
          </nav>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )} */}
    </Container>
  </NavbarRoot>
)

export default Navbar
