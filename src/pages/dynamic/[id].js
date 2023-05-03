import axios from 'axios'
import { useRouter } from 'next/router'

const NamePage = ({ user }) => {
  const router = useRouter()

  return (
    <div className="p-20">
      <p>
        Name <span className="text-red-700">{router.asPath}</span>
      </p>
      <p>
        ID <span className="text-red-700">{router.query.id}</span>
      </p>
      <p>{user.first_name}</p>
    </div>
  )
}

export async function getStaticPaths() {
  // static generation of paths/links
  let data = []
  await axios.get('https://api.ahglab.com/api:W7k9W8HQ/users').then(function (response) {
    data = response.data
  })

  const idPaths = data.map((value) => {
    return {
      params: {
        id: value.id.toString(),
      },
    }
  })

  return {
    paths: idPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // static site generation (data)

  let user = []
  await axios.get(`https://api.ahglab.com/api:W7k9W8HQ/users/${params.id}`).then(function (response) {
    user = response.data
  })

  return {
    props: {
      user: user,
    },
    revalidate: 60,
  }
}

export default NamePage
