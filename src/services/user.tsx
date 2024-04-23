import { useUserLoginMutation } from "../api/userApi.slice";
import { Login } from "../types/user";


export const UserApiService = () => {

  const [userLogin, { isLoading, isError, data: user }] = useUserLoginMutation();

  const login = async (payload: Login) => {
    try {
      const result = await userLogin(payload).unwrap();
      return result;
    } catch (error) {
      console.error('UserApiService => Erro fazer login:', error);
      throw error;
    }
  };

  return {
    login,
    isLoading,
    isError,
    user,
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