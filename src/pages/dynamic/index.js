import axios from 'axios'
import Link from 'next/link'

const AllNamesPage = ({ usersData }) => {
  return (
    <div className="flex justify-center p-20 space-x-5">
      {usersData.map((value, key) => {
        return (
          <Link
            key={key}
            href={{
              pathname: `/dynamic/${value.id}`,
              // query: { id: value.id },
            }}
            className="hover:underline"
          >
            {value.first_name}
          </Link>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  // static site generation (data)
  let data = []
  await axios.get('https://api.ahglab.com/api:W7k9W8HQ/users').then(function (response) {
    data = response.data
  })

  return {
    props: {
      usersData: data,
    },
    revalidate: 60,
  }
}

export default AllNamesPage
