import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  tab: any =[
    {p: "1" , team: "TGH" , w: "12" , d: "8" , l:"5" ,pts: "32"}, //elt
    {p: "2" , team: "REV" , w: "1" , d: "4" , l:"1" ,pts: "32"}, //elt
    {p: "3" , team: "SEV" , w: "14" , d: "6" , l:"6" ,pts: "32"},
    {p: "4" , team: "SDF" , w: "5" , d: "3" , l:"2" ,pts: "32"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
