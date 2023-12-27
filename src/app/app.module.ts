import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerMiniComponent } from './components/player-mini/player-mini.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchingMatchesComponent } from './components/searching-matches/searching-matches.component';
// import de http client
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogsComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddAdminComponent,
    MatchesTableComponent,
    TeamTableComponent,
    MatchesComponent,
    PlayerComponent,
    PlayerMiniComponent,
    MatchInfoComponent,
    PlayerTableComponent,
    EditMatchComponent,
    ReversePipe,
    AsterixPipe,
    SearchingMatchesComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // etape 1: naaml appel mtaa hedhom zouz o tsir mara wahda lel projet lkol mtaa "TDF" o "reactive Form"
    FormsModule,
    ReactiveFormsModule,

    // import de http client
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
