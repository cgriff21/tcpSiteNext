import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/images/TCPlogo.svg"
              alt="The Chance Project Logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">The Chance Project</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link href="about">
            <a className="mr-5 hover:text-gray-900">Who We are</a>
          </Link>
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Our Initiatives</a>
          </Link>
          <Link href="https://www.mightycause.com/organization/Chance-Project">
            <a className="mr-5 hover:text-gray-900">Ways To Give</a>
          </Link>
          <Link href="contact">
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
          </Link>
          <a className="mr-5 hover:text-gray-900">Find Housing</a>
          {/* <Link href="">
          </Link> */}
        </nav>
      </div>
    </header>
  )
}
