import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Profile } from '../model/profile'
import { Conection } from '../model/conection'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'


@Injectable()
export class ProfilesService {

  constructor(private http: Http) { }

  public getProfiles(): Observable<Profile[]> {
    return this.http.get('http://localhost:3000/profiles')
      .map((res: Response) => res.json());
  }

  public getProfile(id: number): Observable<Profile> {
    return this.http.get('http://localhost:3000/profiles/'+id)
      .map((res: Response) => res.json());
  }
/*
  public getConections(id:number): Observable<Conection[]> {
    return this.http.get('http://localhost:3000/conections?user='+id)
      .map((res: Response) => res.json());
  }
  */
}
