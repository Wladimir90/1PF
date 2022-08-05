/* import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.action';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$ = this.store.select(AUTH_SELECTORS.selectGetUser);
  loading$ = this.store.select(AUTH_SELECTORS.selectGetAuthLoading);
  remember$ = this.store.select(AUTH_SELECTORS.selectGetAuthRemember);

  formLogin = new FormGroup({
    user: new FormControl(<any> Validators.required),
    password: new FormControl(<any> Validators.required),
    remember: new FormControl(<any> Validators.required)
  })

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  login(){
    this.store.dispatch(AUTH_ACTIONS.Login.run({
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
      remember: this.formLogin.value.remember,
    }))
  }

} */





import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, } from '@angular/router';
import { timeout } from 'rxjs';
import { Store } from '@ngrx/store';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.action';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  user$ = this.store.select(AUTH_SELECTORS.selectGetUser);
  loading$ = this.store.select(AUTH_SELECTORS.selectGetAuthLoading);
  remember$ = this.store.select(AUTH_SELECTORS.selectGetAuthRemember);

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private store: Store) { 
    this.form = this.fb.group({
      usuario: ['' , Validators.required],
      password: ['' , Validators.required]
    })

  }

  ngOnInit(): void {
  }

  ingresar() {
    this.store.dispatch(AUTH_ACTIONS.Login.run({
      user: this.form.value.user,
      password: this.form.value.password,
      remember: this.form.value.remember,
    }))
    

   /*  const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'wladimir' && password == 'admin90') {
      localStorage.setItem("tipo_user", "administrador");
      //Redireccionamos al dashboard
      this.fakeLoading();
    }else {
      //Mostramos un mensaje de error
      this.error();
      this.form.reset();
    } */
  }
  
  error() {
    this._snackBar.open('Usuario o contraseña ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      //Redireccionamos al dashboard
      this.router.navigate(['alumnos']);
    }, 1500);

  }

}
