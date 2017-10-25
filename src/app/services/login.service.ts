import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { User } from '../model/user'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
public isUserLogged: boolean = false;
  constructor(private http: Http) { }

  public updateUser(user: User): Observable<User> {
    var head = new Headers();
    head.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = head;
    return this.http.patch('http://localhost:3000/users/' + user.id, user, options)
      .map((res: Response) => res.json());
  }

  public login(user: string, pass: string): Observable<User> {
    return this.http.get('http://localhost:3000/users?name=' + user + '&pass=' + pass)
      .map((res: Response) => res.json()[0]);
  }

  public logged(): Observable<User> {
    return this.http.get('http://localhost:3000/users?islogged=true')
      .map((res: Response) => res.json()[0]);
  }

  public authenticate(user: User): Observable<User> {
    user.islogged = this.isUserLogged= true;
    return this.updateUser(user);
  }

  public logout(user: User): Observable<User> {
    user.islogged = this.isUserLogged =false;
    return this.updateUser(user);
  }

  public isAuthenticated(){
    return this.isUserLogged ;
  }
}
