import Link from 'next/link'

// client side rendering
// server side rendering

const NavBar = () => {
  const menu = [
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'about', link: '/about' },
    { id: 3, name: 'contact', link: '/contact' },
  ]

  return (
    <div className="flex py-20 space-x-5">
      {menu.map((value, key) => {
        return (
          <Link
            key={key}
            href={{
              pathname: value.link,
              query: { id: value.id, hehe: 'wala lang' },
            }}
            passHref
            className="text-black uppercase border-b-4 border-transparent cursor-pointer hover:border-blue-600 font-regular"
          >
            {value.name}
          </Link>
        )
      })}
      <a href="/">HOMEEE</a>
    </div>
  )
}

export default NavBar
