import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-match",
  templateUrl: "./edit-match.component.html",
  styleUrls: ["./edit-match.component.css"],
})
export class EditMatchComponent implements OnInit {
  matchForm: FormGroup;
  match: any = {};
  matchesTab: any = [];
  id : any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
  // jebna les données b "JSON.parse"
   this.matchesTab = JSON.parse(localStorage.getItem("matches") || "[]");
  // jebna bih id mtaa kol objet f tableau
   this.id = this.activatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == this.id) {
        this.match = this.matchesTab[i];
        break;
      }
    }
  }

  editMatch() { 
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i]== this.id) {
        this.matchesTab[i] = this.match;
        break;
      }   
    } 
    localStorage.setItem("matches", JSON.stringify(this.matchesTab));
  // router bch ki nkaml modif o nenzel edit trajaani page admin direct 
    this.router.navigate(["AddAdmin"])
  }
}
