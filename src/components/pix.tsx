import { usePostPixMutation } from "../api/apiPix"

export const body =
{
  "transaction_amount": 1,
  "description": "Ingresso valido para entrada ate as 16hrs",
  "payment_method_id": "pix",
  "payer": {
    "email": 'winnicius.moura@gmail.com',
    "first_name": 'Winnicius',
    "last_name": 'Alves',
    "identification": {
      "type": "CPF",
      "number": '097.923.314.33'
    }
  },
}

export const PixComponent = () => {
  const [postPix, { isLoading, isError, data }] = usePostPixMutation()

  console.log(isLoading)
  console.log(isError)
  console.log(data)

  const login = async () => {
    try {
      const result = await postPix(body).unwrap();
      return result;
    } catch (error) {
      console.error('UserApiService => Erro fazer login:', error);
      throw error;
    }
  };
  return (<div>
    <p style={{
      textAlign: 'center',
      alignItems: 'center',
    }} onClick={login}>pix</p>
  </div>)
}