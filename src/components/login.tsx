import { useState } from "react";
import { UserApiService } from "../services/user";
import { Login } from "../types/user";



export const LoginComponent = () => {
  const [user, setUser] = useState<Login>()
  const { data, login, isLoading, isError } = UserApiService();

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
    <input type="text" value={user?.username || ''} onChange={(e) => setUser({
      username: e.target.value,
    } as Login)} placeholder="Username" />

    <input type="password" value={user?.password || ''} onChange={(e) => setUser({
      ...user,
      password: e.target.value,

    } as Login)} placeholder="Password" />
    <button onClick={handleLogin} disabled={isLoading}>Login</button>
    {isError && <p>Error during login. Please try again.</p>}
    {data && <p>Login successful! Welcome, {data.data.username}</p>}
    {data && <p>{data.message}</p>}
  </div>
}