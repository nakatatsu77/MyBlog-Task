import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-teal-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href={'/'}
          passHref
        >
          <span className="ml-3 text-xl text-white">My Blog</span>
        </Link>
      </div>
    </header>
  )
}
