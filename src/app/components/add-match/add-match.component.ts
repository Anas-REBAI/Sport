import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateID } from 'src/app/data/genericFunctions';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  // object
  match: any = {};
  // Form ID
  matchForm: FormGroup;

  constructor(private matchService: MatchService) { }
  ngOnInit() {}

  // function mtaa event 
  addMatch() {
    console.log("here match object", this.match)

    // nasna3 fl constructor var de type b esm class service mtaa haja eli nekhdem feha
    this.matchService.addMatch(this.match).subscribe((response)=>{
      console.log("here response from BE", response);
    });
    
    // let matchesTab = JSON.parse(localStorage.getItem("matches") || "[]");
    // // appel de la fonction "generateID"
    // this.match.id = generateID(matchesTab);
    // matchesTab.push(this.match);
    // localStorage.setItem("matches", JSON.stringify(matchesTab));
  }

}
