import { Control } from "react-hook-form";

export interface LogInData {
    email: string,
    password: string
};

export interface RegisterUserAccount {
    fullName: string,
    email: string,
    password: string,
    passwordRepeat: string
};

export interface InputTextRegisterAccount {
    autocomplete: string,
    htmlFor: string,
    control: Control<any>,
    inputName: string,
    inputType: string,
    label: string,
    placeHolder: string
}

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

export interface ISignUp {
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