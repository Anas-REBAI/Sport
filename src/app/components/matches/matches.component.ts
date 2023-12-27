import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab : any =[];

  constructor() { }

  ngOnInit() {
    this.matchesTab = JSON.parse(localStorage.getItem("matches" || "[]"));
  }


  // MAJ matchesTab "@output"
  updateMatches(T : any){
    this.matchesTab = T;
  }

}
