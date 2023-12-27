import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // form ID
  signupForm : FormGroup;

  title : string;
  path: string;

  imagePreview : any;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService : UserService) {}

  // nheb nkolo hadharli melowel win bch nhot les données
  // Validators 
  ngOnInit() {
    this.path = this.router.url;
    this.title = this.path == "/subscription" ? "Signup user" : "Signup admin";

   this.signupForm = this.formBuilder.group({
      Name:["", [Validators.required, Validators.minLength(3)]],
      email:["", [Validators.required, Validators.email]],
      pwd:["", [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      // nzidha ki bch nhot espace mtaa choose file
      img:[""],
    })
    
  }

  signup(){
    this.signupForm.value.role = this.path =="/subscription" ? "user" : "admin";
    // console.log("here user", this.signupForm.value)
    this.userService.signUp(this.signupForm.value, this.signupForm.value.img).subscribe((response)=>{
      console.log("here response from BE", response.msg);
      
    })
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });    // Mise a jour = patch
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
