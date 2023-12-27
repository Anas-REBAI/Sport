import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user : any;

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn(){

    const jwt = sessionStorage.getItem('jwt'); // recuperer jwt from sessionStorage
    if (jwt) {  // if we have token of user
      this.user = this.decodeToken(jwt)
    }
    return !!jwt; // Not Not !! (trajaa boolean "tconverti boolean")
    }
    

  decodeToken(token: string) : any {
    return jwt_decode(token);
    }

}
