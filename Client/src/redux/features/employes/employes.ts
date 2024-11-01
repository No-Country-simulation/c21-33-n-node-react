import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface Employe {
    apartment: string,
    birthDate: string,
    city: string,
    country: string,
    dni: string,
    email: string,
    firstName: string,
    floor: string,
    lastName: string,
    legado: string,
    passport: string,
    phone: string,
    phoneHouse: string,
    postalCode: string,
    startDate: string,
    status: string,
    streetAddress: string,
}

interface EmployeList {
    employes: Employe[]
}

const initialState: EmployeList = {
    employes: []
}

export const employesSlice = createSlice({
    name: 'employes',
    initialState,
    reducers: {
        addEmploye: (state, action: PayloadAction<Employe>) => {
            state.employes.push(action.payload)
        }
    }
});

export const {
    addEmploye
} = employesSlice.actions;

export default employesSlice.reducer;