import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// client side rendering
// server side rendering

const NavBar = () => {
  const [users, setUsers] = useState()

  const menu = [
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'about', link: '/about' },
    { id: 3, name: 'contact', link: '/contact' },
  ]

  const getUsers = () => {
    axios.get('https://api.ahglab.com/api:W7k9W8HQ/users').then(function (response) {
      setUsers(response?.data)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

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
      {users &&
        users.map((value, key) => {
          return (
            <Link key={key} href={`/dynamic/${value.first_name}`}>
              {value.first_name}
            </Link>
          )
        })}
    </div>
  )
}

export default NavBar
