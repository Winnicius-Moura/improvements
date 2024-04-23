import { useSearchParams } from "react-router-dom"
import { UserApiService } from "../services/user"

export const LoginComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { user, login, isLoading, isError } = UserApiService()


  const handleLogin = async () => {
    try {
      const response = await login({
        username: searchParams.get('username') || '',
        password: searchParams.get('password') || ''
      })
      console.log('Login successful:', response)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value
    setSearchParams((params) => {
      if (username) {
        params.set('username', username)
      } else {
        params.delete('username')
      }
      return params
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setSearchParams((params) => {
      if (password) {
        params.set('password', password)
      } else {
        params.delete('password')
      }
      return params
    })
  }

  return (
    <div>
      <input
        key="usrInput"
        alt="username"
        type="text"
        placeholder="Username"
        value={searchParams.get('username') || ''}
        onChange={handleUsernameChange}
      />

      <input
        key="pwdInput"
        alt="password"
        type="password"
        placeholder="Password"
        value={searchParams.get('password') || ''}
        onChange={handlePasswordChange}
      />

      <button onClick={handleLogin} disabled={isLoading}>
        Login
      </button>
      {isError && <p>Error during login. Please try again.</p>}
      {user && <p>Login successful! Welcome, {user.data.username}</p>}
      {user && <p>{user.message}</p>}
    </div>
  )
}
