<<<<<<< HEAD
import { useUserLoginMutation } from "../api/userApi.slice";
import { Login } from "../types/user";
=======
import { useUserLoginMutation } from "../api/user.slice";
import { Login, LoginResponse } from "../types/user";
>>>>>>> baa2a5f482c1a5f28bebbc9eaaf0aa8f3f6eef99


export const UserApiService = () => {

  const [userLogin, { isLoading, isError, data }] = useUserLoginMutation();

  const login = async (payload: Login) => {
    try {
      const result = await userLogin(payload).unwrap();
      return result;
    } catch (error) {
<<<<<<< HEAD
      console.error('UserApiService => Erro fazer login:', error);
=======
      console.error('Erro fazer login:', error);
>>>>>>> baa2a5f482c1a5f28bebbc9eaaf0aa8f3f6eef99
      throw error;
    }
  };

  return {
    login,
    isLoading,
    isError,
    data,
  };
}

/* ----------------example
const UserFormService = () => {
  const createUserMutation = useCreateUserMutation();
  const getUserQuery = useGetUserQuery();

  const createUser = async (payload: UserFormData): Promise<User | null> => {
    try {
      // Chamar a implementação do Redux para criar um usuário
      const { data: createdUser } = await createUserMutation.mutateAsync(payload);

      return createdUser;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return null;
    }
  };

  const getUserById = async (userId: string): Promise<User | null> => {
    try {
      // Chamar a implementação do Redux para encontrar um usuário pelo ID
      const { data: user } = await getUserQuery(userId);

      return user;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
  };

  return {
    createUser,
    getUserById,
  };
};

export default UserFormService; */