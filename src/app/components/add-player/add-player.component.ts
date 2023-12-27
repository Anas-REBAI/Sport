import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  // object : c'est tableau pour recuperer les données
  players : any = {};
  // Form ID
  playerForm : FormGroup;

  teams : any =[]; // hedha tableau eli bch nestaamlo f select (njib les teams)
  teamID : any;

  imagePreview : any;

  constructor(
    private playerService : PlayerService,
    private router : Router,
    private tService : TeamService,
    ) { }

  ngOnInit() {
    this.tService.getAllTeam().subscribe((response)=>{
      this.teams = response.docs;
      this.teamID = this.teams[0]._id;
    })
  }

  // methode ADD
  addPlayer(){
    this.players.tID = this.teamID;
    this.playerService.addPlayer(this.players).subscribe((response)=>{
      console.log("here response from BE", response.msg);   
    });
    this.router.navigate([""]);
  }

  selectTeam(event){
    // .value = bch  taatini la valeur eli hatitha fl comp.html [value]="t._id" (ligne 36)
    console.log("here team ID", event.target.value);
    this.teamID = event.target.value;
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    // this.playerForm.patchValue({ img: file });    // Mise a jour = patch
    // this.playerForm.updateValueAndValidity();
    this.players.img = file;
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
