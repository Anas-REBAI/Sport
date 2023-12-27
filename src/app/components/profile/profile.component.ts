import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userForm : FormGroup;

  id : any;
  findedUser : any;
  

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router : Router,
    ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name:["", Validators.required],
      email:["", Validators.required],
    })

    this.id = localStorage.getItem('connectedUser');
    this.userService.displayUserById(this.id).subscribe((data)=>{
      console.log("here user from BE", data.user);
      this.findedUser = data.user;  
    })
  }

  editProfile(){
    let obj=this.userForm.value;
    obj._id= localStorage.getItem("connectedUser")
    this.userService.editProfile(obj).subscribe((response)=>{
      console.log("here res from BE", response.isUpddated); 
    })

    this.router.navigate([""])
  }

}
