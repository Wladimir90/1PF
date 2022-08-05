import { Iuser } from "src/app/interfaces/user"

export interface IAuthState {
    user: Iuser | null,
    token: string | null,
    remember: boolean,
    loading: boolean
  }

  export const initialAuthState: IAuthState = {
    user: null,
    token: null,
    loading: false,
    remember: localStorage.getItem('remember') ? true : false
  }