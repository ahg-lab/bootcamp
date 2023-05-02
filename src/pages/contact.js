import { useRouter } from 'next/router'

const ContactPage = () => {
  const router = useRouter()

  return (
    <div>
      <p>Contact</p>
      <h1>ID: {router.query.id}</h1>
    </div>
  )
}

export default ContactPage
