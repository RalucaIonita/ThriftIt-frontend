import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  GoToLogin(): void  {
    this.router.navigateByUrl('login');
  }

  GoToLoginAfterAccountCreated(): void {
    //check account created
    alert("Account created!");
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 200);
  }
}
