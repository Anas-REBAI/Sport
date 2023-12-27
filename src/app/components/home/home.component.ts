import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // variable bch <app-score> ykoun respecté khatro walla paramétré 
  match: any = [
    {id:1, scoreOne: 1, scoreTwo: 3, teamOne:"CA", teamTwo:"EST"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
