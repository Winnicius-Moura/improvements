import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { UserApiService } from "../services/user"
import { Login } from "../types/user"



export const LoginComponent = ({ username, password }: Login) => {
  const [_, setSearchParams] = useSearchParams()

  const [user, setUser] = useState<Login>({
    username: username,
    password: password
  })
  const { data, login, isLoading, isError, } = UserApiService()

  const handleLogin = async () => {
    try {
      const response = await login({
        username: username ?? '',
        password: password ?? '',
      })
      console.log('Login successful:', response)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }


  const handleUrlState = ({ username, password }: Login) => {
    setSearchParams(state => {
      if (username) {
        state.set('username', username)
      } else {
        state.delete('username')
      }

      return state
    })

    setSearchParams(state => {
      if (password) {
        state.set('password', password)
      } else {
        state.delete('password')
      }

      return state
    })
  }

  return <div>
    <button onClick={() => {
      handleUrlState({
        username: user!.username,
        password: user!.password,
      })
    }}>Url State</button>
    <input
      key={'usrInput'}
      alt="username"
      type="text"
      placeholder="Username"
      value={user?.username || ''}
      onChange={(e) => setUser({
        ...user,
        username: e.target.value,
      } as Login)}
    />

    <input
      key={'pwdInput'}
      alt="password"
      type="password"
      placeholder="Password"
      value={user?.password || ''}
      onChange={(e) => setUser({
        ...user,
        password: e.target.value,
      } as Login)}
    />
    <div>Url params from loginPage Username: {username}, Password: {password}</div>

    <button onClick={handleLogin} disabled={isLoading}>Login</button>
    {isError && <p>Error during login. Please try again.</p>}
    {data && <p>Login successful! Welcome, {data.data.username}</p>}
    {data && <p>{data.message}</p>}
  </div >
}