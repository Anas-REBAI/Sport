import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-mini',
  templateUrl: './player-mini.component.html',
  styleUrls: ['./player-mini.component.css']
})
export class PlayerMiniComponent implements OnInit {

  @Input() miniPlayerInput : any;

  constructor() { }

  ngOnInit() {
  }

}
