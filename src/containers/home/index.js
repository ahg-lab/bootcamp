import FooterItem from '@components/footer-item'
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
          className="flex items-center justify-center py-1 mx-1 transition ease-in bg-white rounded-full shadow px-[15rem] duration-900 hover:shadow-lg"
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
      {/* sample */}
      {/* 1 rem = 16px */}
      <div className="flex flex-col w-full p-1 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
        <div className="w-4/12 p-20 bg-sky-400">box 1</div>
        <div className="w-5/12 p-20 bg-pink-400">box 2</div>
        <div className="w-3/12 p-20 bg-rose-500">box 3</div>
      </div>
      {/* kapag lampas 1024 naka row */}
      <div className="flex flex-col w-full p-1 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
        <div className="w-full p-20 lg:w-3/12 bg-rose-500">box 3</div>
        <div className="w-full p-20 lg:w-5/12 bg-sky-400">box 1</div>
        <div className="w-full p-20 bg-pink-400 lg:w-4/12">box 2</div>
      </div>
      <div>
        <FooterItem
          title="ONLINE SERVICES"
          items={['PUP WebMail', 'PUP iApply', 'SIS for Students', 'SIS for Faculty']}
        />
      </div>
      <iframe
        // style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6T5dWVv97mp?utm_source=generator&theme=0"
        width="50%"
        height="352"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  )
}

export default HomepageContainer
