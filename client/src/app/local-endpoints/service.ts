import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const DOMAIN = 'http://localhost:3000/'
@Injectable()
export class LocalEndpointService {

  constructor(private http: HttpClient) {}

  public postData(endPointPath, payload): Observable<any> {

    return this.http.post(`${DOMAIN}${endPointPath}`, 'sadf')
  }
}
