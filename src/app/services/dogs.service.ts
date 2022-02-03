import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  urlDog = 'https://random.dog/woof.json';

  constructor(private http:HttpClient) { }


  getDog():Observable<any>{
    return this.http.get(this.urlDog);
  }
}
