import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl : string = "http://localhost:3000/api/teams"

  constructor(private http : HttpClient) { }

  addTeam(team){
    return this.http.post<{msg : any}>(this.teamUrl, team)
  }

  getAllTeam(){
    return this.http.get<{docs : any}>(this.teamUrl);
  }
}
