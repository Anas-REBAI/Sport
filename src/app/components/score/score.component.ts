import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  // hedhi tebaa el communication mtaa component to component (matches - score)
  @Input () matchInput : any;
  @Output() matchOutput : EventEmitter<any> = new EventEmitter();

// declarih hedha bch nsob fyh les données ml LS
  matchesTab : any =[];

  constructor() { }

  ngOnInit() {
    this.matchesTab = JSON.parse(localStorage.getItem("matches" || "[]"));
  }

  // staamalna maaha [ngStyle] dans html
  scoreColor(a,b){
    if(a>b){
      return "green"
    } else if (a<b){
      return "red"
    } else {return "blue"}
  }

  deleteMatch(id){
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == id) {
        this.matchesTab.splice(i,1);
    // .emit "tebaa @output bch yabaath lel parent signal"
        this.matchOutput.emit(this.matchesTab);
        break;
      }     
    }
    localStorage.setItem("matches", JSON.stringify(this.matchesTab));
  }

}
