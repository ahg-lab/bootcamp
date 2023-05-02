import { useRouter } from 'next/router'

const DynamicPage = () => {
  const router = useRouter()

  return (
    <div>
      <p>
        Dynamic <span className="text-red-700">{router.asPath}</span>
      </p>
    </div>
  )
}

export default DynamicPage
