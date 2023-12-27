import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  // pipe Date
  actualDate: Date = new Date();



  constructor() { }

  ngOnInit() {
    // ou bien hedhi najmo mtaa date
    //this.actualDate = new Date();
  }

}
