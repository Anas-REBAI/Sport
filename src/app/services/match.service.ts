import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // matchURL => adresse du serveur Back.End
  matchURL: string ="http://localhost:3000/api/matches";

  // httpClient : Bostagi
  constructor(private httpClient: HttpClient) {}

  // array of objects
  displayAllMatches(){
    return this.httpClient.get<{matches: any}>(this.matchURL);
  }

  displayMatchById(id){
    // return this.httpClient.get(this.matchURL + "/" + id);
    return this.httpClient.get<{match : any}>(`${this.matchURL}/${id}`);
  }

  deleteMatch(id){
    return this.httpClient.delete(`${this.matchURL}/${id}`);
  }

  addMatch(matchObj){
    return this.httpClient.post<{msg : string}>(this.matchURL, matchObj);
  }

  editMatch(newObj){
    return this.httpClient.put(this.matchURL, newObj); 
    // put: n modif  *** patch pour 1 modif
  }

  
 
  searchMatchByScore(){}
}
