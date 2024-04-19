import { UserId } from "../types/user"


export const UserComponent = ({ userId }: UserId) => {
  //capturar o id que veio na url para exibir os dados do usuario

  return <p>User{userId}</p>
}