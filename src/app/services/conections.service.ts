import { Conection } from './../model/conection';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'


@Injectable()
export class ConectionsService {

  constructor(private http: Http) { }

  public getConections(id: number): Observable<Conection> {
    return this.http.get('http://localhost:3000/conections?user=' + id)
      .map((res: Response) => res.json()[0]);
  }

  public addConection(conection: Conection, friend_id: number): Observable<Conection> {

    var head = new Headers();
    head.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = head;
    conection.friends.push(friend_id);
    return this.http.put('http://localhost:3000/conections/' + conection.id, conection, options)
      .map((res: Response) => res.json());
  }

  public removeConection(conection: Conection, friend_id: number): Observable<Conection> {
    var head = new Headers();
    head.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = head;
    let index = conection.friends.indexOf(friend_id);
    let unfollow =conection.friends.splice(index,1);
    return this.http.put('http://localhost:3000/conections/' + conection.id, conection, options)
      .map((res: Response) => res.json());
  }
}
