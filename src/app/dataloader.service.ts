import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataloaderService {

  constructor(private httpClient: HttpClient) { }
  weburl = 'https://reqres.in/api/users?page=2';

  getData(): Observable<object> {
    return this.httpClient.get(this.weburl).pipe(
      map(result => {
        return result;
      }),
    );
  }
}
