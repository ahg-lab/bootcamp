import Title from '@components/title'
import { useState } from 'react'

const HomepageContainer = () => {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(true)

  return (
    <>
      <div className="flex flex-col items-center">
        <p className={`font-${count < 5 ? 'bold' : 'semibold'}`}>HOMEPAGAE</p>
        <p className="text-hehe">{count}</p>
        {display ? (
          <div className="hidden h-48 grid-cols-4 gap-10 lg:grid">
            <a className="text-great-blue hover:underline hover:text-great-blue-100">fsdfsdfsd1</a>
            <p className="text-great-blue-500">2</p>
            <p className="text-great-blue-100">3</p>
            <p className="text-great-blue-950">4</p>
          </div>
        ) : (
          <div className="h-48" />
        )}
        <button
          className="flex items-center justify-center w-full px-4 py-1 mx-1 bg-white rounded-full shadow"
          onClick={() => setCount(count + 1)}
          onMouseEnter={() => {
            setDisplay(false)
          }}
          onMouseLeave={() => {
            setDisplay(true)
          }}
        >
          hit me baby
        </button>
      </div>
      <div>
        <Title name="A" school="B" mall="C" />
      </div>
    </>
  )
}

export default HomepageContainer
