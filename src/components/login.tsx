import { CookieUtils } from "essencials"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { RootState } from "../redux/store"
import { UserApiService } from "../services/user"
import Questionnaire from "./formPaginated"
import questionsPayload from "./data"

export const LoginComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { user, login, isLoading, isError } = UserApiService()
  const userGlobalState = useSelector((state: RootState) => state.userInfo.data.username)
  const cookie = CookieUtils.getCookie('tk')


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
  console.log('LOGIN COMPONENTE BUILD')
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'start',
      border: 1,
      borderColor: 'white',
      // width: 100
    }}>
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

      {/* <Button
        onClick={handleLogin}
        disabled={isLoading}
        startIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : null}
      >
        {user?.data ? <CheckIcon /> : isError ? <CloseIcon /> : 'Login'}
      </Button> */}

      <button onClick={handleLogin} disabled={isLoading}>
        Login
      </button>
      {userGlobalState && <p>estado global user {userGlobalState}</p>}
      {cookie && <p>Cookie token {cookie}</p>}

      {isError && <p>Error during login. Please try again.</p>}
      {user && <p>Login successful! Welcome, {user?.data?.username}</p>}
      {user && <p>{user.message}</p>}
      <Questionnaire questions={questionsPayload}/>
    </div>
  )
}
