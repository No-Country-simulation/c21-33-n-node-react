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

export interface EmployeData {
    apartment: string,
    birthDate: string,
    city: string,
    country: string,
    dni: string | undefined,
    email: string,
    finishDate: string | undefined
    firstName: string,
    floor: string,
    lastName: string,
    legado: string,
    passport: string | undefined,
    phone: string,
    phoneHouse: string | undefined,
    postalCode: string,
    startDate: string,
    status: string,
    streetAddress: string,
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
};

export interface EmployeFormFilter {
    firstName: string,
    lastName: string,
    state: string,
    IDCode: string,
    startDate: string,
    position: string
}

export interface InputTextUserInfoDisabled {
    label: string,
    size: number,
    value: string
};

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