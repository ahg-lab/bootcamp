import AboutContainer from '@containers/about'
import axios from 'axios'
import { useRouter } from 'next/router'

const AboutPage = ({ usersData }) => {
  const router = useRouter()

  return (
    <div>
      {console.log('usersData == ', usersData)}
      <p>About</p>
      <h1>ID: {router.query.id}</h1>
      <h1>ID: {router.query.hehe}</h1>
      <AboutContainer />
    </div>
  )
}

export default AboutPage

export async function getServerSideProps() {
  let data = ''
 
  axios.get('https://api.ahglab.com/api:W7k9W8HQ/users').then(function (response) {
    data = response.data
  })

  return {
    props: {
      usersData: data,
    },
  }
}
