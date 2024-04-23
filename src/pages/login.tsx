import { useSearchParams } from "react-router-dom"
import { LoginComponent } from "../components/login"

export const LoginPage = () => {
  const [searchParams] = useSearchParams()
  const username = searchParams.get('username')
  const password = searchParams.get('password')

  return <LoginComponent username={username || ''} password={password || ''} />
}