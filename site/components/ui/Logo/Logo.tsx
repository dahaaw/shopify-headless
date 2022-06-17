import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ className = '', ...props }) => (
  <Link href="/">
    <Image
      src="/images/logo.png"
      className="cursor-pointer"
      width="100%"
      height={50}
      layout="fixed"
      alt="logo"
    />
  </Link>
)

export default Logo
