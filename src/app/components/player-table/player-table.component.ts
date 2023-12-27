import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  playerTab: any = [
    {id:1, fullName:"cristiano ronaldo", birthday:"13/06/1990", poste:"atk"},
    {id:2, fullName:"lionel messi", birthday:"20/06/1992", poste:"mid"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDisplayPlayerTab(id){  
      alert("clicked" + id);
      // location.replace(".....") hedhi f JS
      // router.navigate (t5alini navigui sans reload)
      // router edhika declaré fl constructor
      this.router.navigate([`matchInfo/${id}`]);
  }

}
