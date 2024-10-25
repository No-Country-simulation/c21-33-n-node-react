import { ISignIn, ISignInResponse } from "@/interfaces";
import { axiosPublic } from "@/config/axios.config";


export function SignInApi(body:ISignIn): Promise<ISignInResponse>{
    return axiosPublic.post<ISignInResponse>('auth/signin', body)
    .then(response => response.data) // Aquí extraemos solo los datos de la respuesta
    .catch(err => {
      // Puedes manejar el error aquí si es necesario
      throw err; // Re-lanzamos el error para manejarlo más arriba si es necesario
    });
    // return axiosPublic.post<ISignInResponse>('auth/signin', body)
}


// export function SignUpApi (body: ISignUp): Promise<ISignUpResponse>{
//     return axiosPublic.post<ISignUpResponse>('auth/signup', body)
// }