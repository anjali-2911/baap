import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
   
  }
  
  getData()
  {
   // let url="https://jsonplaceholder.typicode.com/todos/";
   let url="https://gorest.co.in/public/v1/posts";
    return this.http.get(url);
  }
}
