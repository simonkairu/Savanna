import { Component, OnInit } from '@angular/core';
import {NgForm}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  url= "./assets/Asset 1.svg "
  myImage:string = "./assets/Logo.svg"
  
  onSubmit(signInForm:NgForm){
    console.log(signInForm.value);
  }

}
