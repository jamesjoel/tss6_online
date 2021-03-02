import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userReg : FormGroup;
  submitCheck = false;


  x=false;

  demo(){
    this.x = true;
  }

  constructor(private _fb : FormBuilder) {
    this.userReg = this._fb.group({
      name : ["", Validators.required],
      username : ["", Validators.required],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      city : ["", Validators.required],
      address : ["", Validators.required],
      gender : ["", Validators.required],
      contact : ["", Validators.required]
    })
   }

  ngOnInit() {
  }

  save(){
    this.submitCheck=true;
    if(this.userReg.invalid){
      return;
    }
    console.log(this.userReg.value);
  }

}
