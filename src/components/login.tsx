import { useState } from "react";
import { UserApiService } from "../services/user";
import { Login } from "../types/user";



export const LoginComponent = () => {
  const [user, setUser] = useState<Login>()
  const { data, login, isLoading, isError, } = UserApiService();

  const handleLogin = async () => {
    try {
      const response = await login({
        username: user?.username ?? '',
        password: user?.password ?? '',
      });
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return <div>
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

    <button onClick={handleLogin} disabled={isLoading}>Login</button>
    {isError && <p>Error during login. Please try again.</p>}
    {data && <p>Login successful! Welcome, {data.data.username}</p>}
    {data && <p>{data.message}</p>}
  </div>
}