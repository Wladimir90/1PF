import { createAction, props } from "@ngrx/store";
import { Alumno } from "src/app/interfaces/alumno";
import { Iuser } from '../../interfaces/user';


export const AUTH_ACTIONS = {
  Login: {
    run: createAction('[Login] iniciar sesión', props<{user: string, password: string, remember: boolean}>()),
    success: createAction('[Login] iniciar sesión success', props<{user:Iuser, token: string, remember: boolean}>()),
    failed: createAction('[Login] iniciar sesión failed',  props<{error: Error}>())
  },
  Logout:{
    run: createAction('[Logout] cerrar sesión'),
  }
}
