import { FC, useState } from 'react'
import Image from 'next/image'

const Galery: FC<any> = ({ images }) => {
  const [selected, setSelected] = useState(0)
  return (
    <aside>
      {/* gallery */}
      <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5 ">
        <Image
          quality={70}
          src={images[selected].url}
          width={'100%'}
          height={'100%'}
          layout="responsive"
          alt={images[selected].altText}
        />
      </div>
      <div className="space-x-2 overflow-auto text-center whitespace-nowrap ">
        {images.map((img: any, i: number) => {
          return (
            <div
              key={i}
              className={`${
                selected === i ? 'border-blue' : 'border-gray-200'
              } inline-block border  p-1 rounded-md hover:border-blue w-[80px]`}
              onClick={() => setSelected(i)}
            >
              <Image
                quality={10}
                alt={img.altText}
                src={img.url}
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
            </div>
          )
        })}
      </div>
      {/* gallery end.// */}
    </aside>
  )
}

export default Galery
