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

export interface RegisterNewEmploye {
    firstName: string,
    lastName: string,
    streetAddress: string,
    floor: string,
    apartment: string,
    dni: string,
    birthDate: string,
    passport: string,
    country: string,
    city: string,
    phone: string,
    phoneHouse: string,
    postalCode: string,
    legado: string,
    email: string,
    startDate: string,
};

export interface InputTextRegisterAccount {
    autocomplete: string,
    htmlFor: string,
    control: Control<any>,
    inputName: string,
    inputType: string,
    label: string,
    placeHolder: string
    pattern?: {
        message: string,
        value: RegExp
    },
    required: boolean,
    size: number
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