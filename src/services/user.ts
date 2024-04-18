import { User } from "../types/user"

interface UserFormService {
  user: User
}


export const UserFormService = ({ user }: UserFormService) => {
  //implementar metodos para get e create user
  //utilizar redux createApi
  // const response = await useGetUserQuery(user.id);
  //return response  s
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