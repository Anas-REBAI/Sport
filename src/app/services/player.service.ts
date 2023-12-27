import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // userURL => adresse du serveur Back.End
  playerURL: string ="http://localhost:3000/api/players";

  // httpClient : Bostagi
  constructor(private httpClient: HttpClient) {}

  addPlayer(playerObj){
    return this.httpClient.post<{msg : string}>(this.playerURL, playerObj)
  }

  editPlayer(newPlayer){
    return this.httpClient.put(this.playerURL, newPlayer)
  }

  getPlayerByID(id){
    return this.httpClient.get(`${this.playerURL}/${id}`);
  }

  deletePlayer(id){
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }

  getAllPlayer(){
    return this.httpClient.get(this.playerURL);
  }

}
