import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searching-matches',
  templateUrl: './searching-matches.component.html',
  styleUrls: ['./searching-matches.component.css']
})
export class SearchingMatchesComponent implements OnInit {

  matchesTab: any = [];
  searchMatchesTab: any = [];

  // form ID
    searchForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) { }
    
    ngOnInit() {
    this.matchesTab = JSON.parse(localStorage.getItem("matches" || "[]"));
    this.searchForm = this.formBuilder.group({
    scoreOne: ["", [Validators.required]],
    scoreTwo: ["", [Validators.required]],
    })
    }
    
    searchMatches() {
    // réinitialisation (hedhi bch ki ncharchi al jdid yjibo kn howa meyjkhalilich recherche)
    this.searchMatchesTab = [];
    for (let i = 0; i < this.matchesTab.length; i++) {
    let x = this.searchForm.value;
    // console.log(this.searchForm.value);
    if (this.matchesTab[i].scoreOne == x.scoreOne && this.matchesTab[i].scoreTwo == x.scoreTwo) {
    this.searchMatchesTab.push(this.matchesTab[i]);
    }
    }
    // console.log(this.searchMatchesTab);
    
    }
}
