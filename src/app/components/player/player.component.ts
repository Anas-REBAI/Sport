import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playersTab : any = [
    {id:1, name: "messi", nbr:"10", position:"mid"},
    {id:2, name: "ronaldo", nbr:"7", position:"atk"},
    {id:3, name: "saleh", nbr:"9", position:"atk"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
