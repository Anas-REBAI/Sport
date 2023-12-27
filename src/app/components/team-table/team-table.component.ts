import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

  teamsTab: any = [
    {id:1, name:"EST", owner:"hamdi", stadium:"rades", foundation:"1919"},
    {id:2, name:"CSS", owner:"moncef", stadium:"taieb mhiri", foundation:"1926"},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDisplayTeamTab(id){
    alert("clicked" + id);
    // location.replace(".....") hedhi f JS
    // router.navigate (t5alini navigui sans reload)
    // router edhika declaré fl constructor
    this.router.navigate([`matchInfo/${id}`]);

  }

}
