import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // ID
  loginForm : FormGroup

  errorMsg : string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {}

// nheb nkolo hadharli melowel win bch nhot les données
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      pwd:["", Validators.required],
    })
  }

  login(){
    this.userService.login(this.loginForm.value).subscribe((response)=>{
      console.log("user connected", response);
      if (response.token){
        sessionStorage.setItem("token", response.token);
        // hedhi bch taatini object eli bch nekho menno juste role
        let role = this.decodeToken(response.token).role
        if (role == "admin") 
        {
          this.router.navigate(["AddAdmin"]);
        }else{
        this.router.navigate([""]);
             }
      } else {
        this.errorMsg = "Please check Email/ Pwd"
      }
    })
  }

  decodeToken(token: string) : any {
    return jwt_decode(token);
    }

}
