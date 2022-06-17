import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import type { Product } from '@commerce/types/product'
import s from './ProductCard.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'
import usePrice from '@framework/product/use-price'
import ProductTag from '../ProductTag'

interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>
  variant?: 'default' | 'slim' | 'simple' | 'new'
  key: any
}

const placeholderImg = '/product-img-placeholder.svg'

const ProductCard: FC<Props> = ({
  product,
  imgProps,
  className,
  noNameTag = false,
  variant = 'default',
  key,
}) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  const rootClassName = cn(
    s.root,
    { [s.slim]: variant === 'slim', [s.simple]: variant === 'simple' },
    className
  )

  return (
    <div key={key}>
      <article className="shadow-sm rounded bg-white border border-gray-200">
        <Image
          quality="85"
          className="mx-auto w-auto"
          src={product.images[0]?.url || placeholderImg}
          alt={product.name || 'Product Image'}
          width="100%"
          height="100%"
          layout="responsive"
          {...imgProps}
        />
        <div className="p-4 border-t border-t-gray-200">
          <p className="font-semibold">{`${price} ${product.price?.currencyCode}`}</p>
          <div className="block text-gray-600 mb-3 min-h-[50px] ">
            {product.name}
          </div>
          <div className="flex">
            <Link href={`/product/${product.slug}`}>
              <div className="w-full px-4 py-2 inline-block text-white text-center bg-blue border border-blue rounded-md hover:bg-transparent hover:text-blue mr-2 cursor-pointer">
                view
              </div>
            </Link>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
          </div>
          {/* <div className="flex mt-2">
            
          </div> */}
        </div>
      </article>
    </div>
    // <Link href={`/product/${product.slug}`}>
    //   <a className={rootClassName} aria-label={product.name}>
    //     {variant === 'slim' && (
    //       <>
    //         <div className={s.header}>
    //           <span>{product.name}</span>
    //         </div>
    //         {product?.images && (
    //           <div>
    //             <Image
    //               quality="85"
    //               src={product.images[0]?.url || placeholderImg}
    //               alt={product.name || 'Product Image'}
    //               height={320}
    //               width={320}
    //               layout="fixed"
    //               {...imgProps}
    //             />
    //           </div>
    //         )}
    //       </>
    //     )}

    //     {variant === 'simple' && (
    //       <>
    //         {process.env.COMMERCE_WISHLIST_ENABLED && (
    //           <WishlistButton
    //             className={s.wishlistButton}
    //             productId={product.id}
    //             variant={product.variants[0]}
    //           />
    //         )}
    //         {!noNameTag && (
    //           <div className={s.header}>
    //             <h3 className={s.name}>
    //               <span>{product.name}</span>
    //             </h3>
    //             <div className={s.price}>
    //               {`${price} ${product.price?.currencyCode}`}
    //             </div>
    //           </div>
    //         )}
    //         <div className={s.imageContainer}>
    //           {product?.images && (
    //             <div>
    //               <Image
    //                 alt={product.name || 'Product Image'}
    //                 className={s.productImage}
    //                 src={product.images[0]?.url || placeholderImg}
    //                 height={540}
    //                 width={540}
    //                 quality="85"
    //                 layout="responsive"
    //                 {...imgProps}
    //               />
    //             </div>
    //           )}
    //         </div>
    //       </>
    //     )}

    //     {variant === 'new' && (
    //       <article className="shadow-sm rounded bg-white border border-gray-200">
    //         <a href="#" className="block relative p-1">
    //           <Image
    //             quality="85"
    //             className="mx-auto object-fill"
    //             src={product.images[0]?.url || placeholderImg}
    //             alt={product.name || 'Product Image'}
    //             height={240}
    //             layout="fixed"
    //             {...imgProps}
    //           />
    //         </a>
    //         <div className="p-4 border-t border-t-gray-200">
    //           <p className="font-semibold">$99.50</p>
    //           <a
    //             href="#"
    //             className="block text-gray-600 mb-3 hover:text-blue-500"
    //           >
    //             Sample name of the product just goes here
    //           </a>
    //           <div>
    //             <a
    //               className="px-4 py-2 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
    //               href="#"
    //             >
    //               Add to cart
    //             </a>
    //             <a
    //               className="px-3 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
    //               href="#"
    //             >
    //               <i className="fa fa-heart" />
    //             </a>
    //           </div>
    //         </div>
    //       </article>
    //     )}

    //     {variant === 'default' && (
    //       <>
    //         {process.env.COMMERCE_WISHLIST_ENABLED && (
    //           <WishlistButton
    //             className={s.wishlistButton}
    //             productId={product.id}
    //             variant={product.variants[0] as any}
    //           />
    //         )}
    //         <ProductTag
    //           name={product.name}
    //           price={`${price} ${product.price?.currencyCode}`}
    //         />
    //         <div className={s.imageContainer}>
    //           {product?.images && (
    //             <div>
    //               <Image
    //                 alt={product.name || 'Product Image'}
    //                 className={s.productImage}
    //                 src={product.images[0]?.url || placeholderImg}
    //                 height={540}
    //                 width={540}
    //                 quality="85"
    //                 layout="responsive"
    //                 {...imgProps}
    //               />
    //             </div>
    //           )}
    //         </div>
    //       </>
    //     )}
    //   </a>
    // </Link>
  )
}

export default ProductCard
