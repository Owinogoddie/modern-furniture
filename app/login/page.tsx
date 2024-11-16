import { Metadata } from 'next'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Log in | Modern Furniture',
}

export default function LoginPage() {
  return (
    <div className="sign-in-page">
      <LoginForm />
    </div>
  )
}