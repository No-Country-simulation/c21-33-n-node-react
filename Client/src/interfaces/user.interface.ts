
 export interface ISignIn {
    name: string,
    password: string 
 }

 export interface ISignInResponse {
    token: string;
    data: {
      id: string;
      name: string;
      email: string;
    };
  }
 
  export interface ISignUp{
    name: string,
    password: string 
  }

  
 export interface ISignUpResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
