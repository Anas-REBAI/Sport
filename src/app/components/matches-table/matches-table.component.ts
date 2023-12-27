import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matchesTab : any = [];
  constructor(private router: Router, private matchService: MatchService) { }

  // kalo jibli les données eli mawjoudin dés que serveur yetlansa
  ngOnInit() {
    // this.matchesTab = JSON.parse(localStorage.getItem("matches") || "[]");
    this.matchService.displayAllMatches().subscribe((response)=>{
      console.log("here response from BE", response);
      this.matchesTab = response.matches;
    })
  }

  goToDisplay(id){
    // alert("clicked" + id);
    // location.replace(".....") hedhi f JS
    // router.navigate (t5alini navigui sans reload)
    // router edhika declaré fl constructor
    this.router.navigate([`matchInfo/${id}`]);
  }

  goToEdit(id){
    // alert("clicked" + id);
    this.router.navigate([`editMatch/${id}`]);
  }

  deleteMatch(x){
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == x) {
        this.matchesTab.splice(i,1);
        break;       
      }
    }
    localStorage.setItem("matches", JSON.stringify(this.matchesTab))
  }

}
