import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { LoginUser } from '../models/loginUser';
import { ReturnLoginUser } from '../models/returnLoginUser';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  apiUrl = "https://localhost:44393/";
  loginUrl = this.apiUrl + "api/account/login";
  registerUrl = this.apiUrl + "api/account/register";


  Register(user:User): boolean {
    var result = this.http.post<User>(this.registerUrl, user)
    .subscribe(
      (data) => console.log(data));
    console.log(result);
    return true;
  }

  Login(user:LoginUser): boolean {
    var result = this.http.put<ReturnLoginUser>(this.loginUrl, user)
    .subscribe(
      (data) =>
        {
          console.log(data);
          localStorage.setItem('thriftItToken', JSON.stringify({token: data.accessToken}));
        });
      return true;
  }
}
