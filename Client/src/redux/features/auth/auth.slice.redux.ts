import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { SignInApi } from "@/api/auth.api";
import { IErrorResponse, ISignIn, ISignInResponse } from "@/interfaces";
import { AxiosError } from "axios";

export const signInFetch = createAsyncThunk<
  ISignInResponse, // El tipo de dato esperado en caso de éxito
  ISignIn, // El tipo de argumento que recibe el thunk
  {
    rejectValue: IErrorResponse; // El tipo del valor de rechazo
  }
>('auth/signIn', async (body: ISignIn, { rejectWithValue }) => {
  try {
    const response = await SignInApi(body)
    return response
  } catch (err) {

    const error: AxiosError<IErrorResponse> = err as AxiosError<IErrorResponse>;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);

  }

})

// Define la interfaz del estado de autenticación
interface AuthState {
  data: ISignInResponse['data'] | null; // Usuario que se obtiene tras la autenticación
  token: string | null; // Token de autenticación
  loading: boolean; // Indica si se está procesando la solicitud
  error: string | null; // Mensaje de error si ocurre
}

// Estado inicial
const initialState: AuthState = {
  data: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Cuando el thunk está en estado pending
      .addCase(signInFetch.pending, (state) => {
        state.loading = true;
        state.error = null; // Limpiar el error al comenzar
      })
      // Cuando el thunk se resuelve exitosamente
      .addCase(signInFetch.fulfilled, (state, action: PayloadAction<ISignInResponse>) => {
        state.loading = false;
        state.data = action.payload.data; // Almacena el usuario
        state.token = action.payload.token; // Almacena el token
      })
      // Cuando el thunk falla
      .addCase(signInFetch.rejected, (state, action: PayloadAction<IErrorResponse | undefined>) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to sign in'; // Mensaje de error
      });
  },

})

// Exportar las acciones del slice
export const { logout } = authSlice.actions;

// Exportar el reducer del slice
export default authSlice.reducer;