import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, } from '@angular/router';
import { timeout } from 'rxjs';
import { Store } from '@ngrx/store';
import { AUTH_ACTIONS } from 'src/app/store/actions/auth.action';
import { AUTH_SELECTORS } from 'src/app/store/selectors/auth.selectors';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginModule } from './login.module';



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
      user: ['' , Validators.required],
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

    const user = this.form.value.usuario;
    const password = this.form.value.password;

    if( user == user && password == password)
    this.fakeLoading();
    else {
      this.error();
      this.form.reset();
    } 
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
      this.router.navigate(['home']);
    }, 1500);

  } 


}
