import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchingMatchesComponent } from './components/searching-matches/searching-matches.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "signin", component: LoginComponent},
  { path: "subscription", component: SignUpComponent},
  { path: "signUpAdmin", component: SignUpComponent},
  { path: "AddMatchs", component: AddMatchComponent},
  { path: "AddPlayer", component: AddPlayerComponent},
  { path: "AddTeam", component: AddTeamComponent},
  { path: "AddAdmin", component: AddAdminComponent},
  { path: "Matches", component: MatchesComponent},
  { path: "allplayers", component: PlayerComponent},
  { path: "search", component: SearchingMatchesComponent},
  // path paramétré "/:" (nekhdmo fl bouton mtaa dislay Admin)
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "profile", component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
