import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  findedMatch : any;

  matchesTab: any = [
    {id:1, scoreOne: 1, scoreTwo: 3, teamOne:"CA", teamTwo:"EST"},
    {id:2, scoreOne: 1, scoreTwo: 3, teamOne:"CA", teamTwo:"EST"},
    {id:3, scoreOne: 1, scoreTwo: 3, teamOne:"CA", teamTwo:"EST"}
  ]

  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.displayMatchById(id).subscribe((response)=>{
       console.log("here response from BE", response);
       this.findedMatch = response.match;
    })
   
    // for(let i=0; i< this.matchesTab.length; i++ ){
    //   if(this.matchesTab[i].id == id){
    //     this.findedMatch
    //   }
    // }
  }

}
