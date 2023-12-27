import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // userURL => adresse du serveur Back.End
  userURL: string ="http://localhost:3000/api/users";

  // httpClient : Bostagi
  constructor(private httpClient: HttpClient) {}

  // user = {email, pwd}
  login(user){
    return this.httpClient.post<{msg : any, token : string}>(this.userURL + "/login", user);
  }

  // userObj = {Name, email, pwd}
  // signUp(userObj){
  //   return this.httpClient.post<{msg : any}>(this.userURL + "/signup", userObj);
  // }
  signUp(user, img:File){
    let formData = new FormData();
    //comment remplir le formData
    formData.append("Name", user.Name);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);
    formData.append("img", img);
    return this.httpClient.post<{msg: boolean}>(this.userURL + "/signup", formData);
  }

  // newUser : object that contains new values
  editProfile(newUser){
    return this.httpClient.put<{isUpddated : boolean}>(this.userURL, newUser);
  }

  displayUserById(id){
    // return this.httpClient.get(this.matchURL + "/" + id);
    return this.httpClient.get<{user : any}>(`${this.userURL}/${id}`);
  }

}
