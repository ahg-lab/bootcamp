import AboutContainer from '@containers/about'
import axios from 'axios'
import { useRouter } from 'next/router'

const AboutPage = ({ usersData }) => {
  const router = useRouter()

  return (
    <div>
      <p>About</p>
      <h1>ID: {router.query.id}</h1>
      <h1>ID: {router.query.hehe}</h1>
      <div className="flex flex-col pt-10">
        {usersData &&
          usersData.map((value, key) => {
            return (
              <p key={key} className="text-sm text-black">
                {value.first_name}
              </p>
            )
          })}
      </div>
      <AboutContainer />
    </div>
  )
}

export default AboutPage

export async function getServerSideProps() {
  let data = []
  await axios.get('https://api.ahglab.com/api:W7k9W8HQ/users').then(function (response) {
    data = response.data
  })

  return {
    props: {
      usersData: data,
    },
  }
}
