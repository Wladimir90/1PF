import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Iuser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList:Iuser[] = [];


  userSelected$ = new BehaviorSubject<Iuser | null>(null);
  users$ = new BehaviorSubject<Iuser[]>(this.userList);

  constructor(private httpClient: HttpClient) { }

  login(username:string, password:string): Observable<Iuser | null>{
    return this.httpClient.get<Iuser[]>('https://62ce15a7066bd2b6992faf7d.mockapi.io/api/v1/'+'alumno',{headers: new HttpHeaders({
      "authorization": 'Este es el token'
    })}).pipe(
      map((users) => {
        return users.find(user =>  user.username == username && user.password == password) || null
      }),
      catchError((error) => {
        throw new Error()
      })
    );
  }
}
