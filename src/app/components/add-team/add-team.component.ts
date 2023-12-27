import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  // object : c'est tableau pour recuperer les données
  teams : any = {};
  // Form ID
  teamForm : FormGroup;

  constructor(private teamService : TeamService) { }

  ngOnInit() {
  }

  addTeam(){
    console.log("here team objects", this.teams);
    this.teamService.addTeam(this.teams).subscribe((response)=>{
      console.log("here response from BE : ", this.teams);
    })
  }


}
