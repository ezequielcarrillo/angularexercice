import { Publication } from './../model/publication';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'


@Injectable()
export class PublicationsService {

  constructor(private http: Http) { }
  
    public getPublications(author_id: number): Observable<Publication[]> {
      return this.http.get('http://localhost:3000/publications?author_id='+author_id)
        .map((res: Response) => res.json());
    }

    public likePublications(publication: Publication): Observable<Publication[]> {
      var head = new Headers();
      head.append('Content-Type', 'application/json');
      let options = new RequestOptions();
      options.headers = head;
      publication.likes += 1;
      return this.http.patch('http://localhost:3000/publications/'+publication.id, publication, options)
        .map((res: Response) => res.json());
    }
    
}
