import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  apiUrl = "https://localhost:44393/";
  loginUrl = this.apiUrl + "api/account/login";
  registerUrl = this.apiUrl + "api/account/register";


  Register(user:User): boolean {

    const body = JSON.stringify(user);
    var result = this.http.post(this.registerUrl, body);
    return true;
  }


}
