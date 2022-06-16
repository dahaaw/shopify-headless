import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image src="/images/logo.png" width="100" height={38} />
)

export default Logo
