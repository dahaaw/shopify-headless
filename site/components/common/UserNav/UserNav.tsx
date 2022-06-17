import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import { Avatar } from '@components/common'
import useCart from '@framework/cart/use-cart'
import { useUI } from '@components/ui/context'
import CustomerMenuContent from './CustomerMenuContent'
import useCustomer from '@framework/customer/use-customer'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger as DropdownTriggerInst,
  Button,
} from '@components/ui'

import type { LineItem } from '@commerce/types/cart'

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: React.FC<{
  className?: string
  sidebar?: boolean
}> = ({ className, sidebar }) => {
  const { data } = useCart()
  const { data: isCustomerLoggedIn } = useCustomer()
  const {
    toggleSidebar,
    closeSidebarIfPresent,
    openModal,
    setSidebarView,
    openSidebar,
  } = useUI()

  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0
  const DropdownTrigger = isCustomerLoggedIn
    ? DropdownTriggerInst
    : React.Fragment

  return (
    <>
      {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
        <Dropdown>
          <DropdownTrigger>
            <div
              className="cursor-pointer px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              onClick={() => (isCustomerLoggedIn ? null : openModal())}
            >
              <i className="text-gray-400 w-5 fa fa-user" />
              <span className="hidden lg:inline ml-1">
                {!isCustomerLoggedIn && !sidebar && 'Sign in'}
              </span>
            </div>
          </DropdownTrigger>
          <CustomerMenuContent />
        </Dropdown>
      )}

      {/* {process.env.COMMERCE_WISHLIST_ENABLED && ( */}
      <Link onClick={closeSidebarIfPresent} href="/wishlist">
        <div className="cursor-pointer px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
          <i className="text-gray-400 w-5 fa fa-heart" />
          {!sidebar && <span className="hidden lg:inline ml-1">Wishlist</span>}
        </div>
      </Link>
      {/* )} */}

      {process.env.COMMERCE_CART_ENABLED && (
        <a
          onClick={() => {
            setSidebarView('CART_VIEW')
            openSidebar()
          }}
          className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300 relative"
          href="#"
        >
          {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
          <i className="text-gray-400 w-5 fa fa-shopping-cart" />
          {!sidebar && <span className="hidden lg:inline ml-2">My cart</span>}
        </a>
      )}

      {/* <nav className={cn(s.root, className)}>
       <ul className={s.list}> 
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            className={s.item}
            variant="naked"
            onClick={() => {
              setSidebarView('CART_VIEW')
              openSidebar()
            }}
            aria-label={`Cart items: ${itemsCount}`}
          >
            <Bag />
            {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
          </Button>
        )} 
         {process.env.COMMERCE_WISHLIST_ENABLED && (
          <li className={s.item}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
        )} 
         {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            <Dropdown>
              <DropdownTrigger>
                <button
                  aria-label="Menu"
                  className={s.avatarButton}
                  onClick={() => (isCustomerLoggedIn ? null : openModal())}
                >
                  <Avatar />
                </button>
              </DropdownTrigger>
              <CustomerMenuContent />
            </Dropdown>
          </li>
        )} 
        <li className={s.mobileMenu}>
           <Button
            className={s.item}
            aria-label="Menu"
            variant="naked"
            onClick={() => {
              setSidebarView('MOBILEMENU_VIEW')
              openSidebar()
            }}
          >
            <Menu />
          </Button> 
         </li> 
       </ul>
    </nav> */}
    </>
  )
}

export default UserNav
