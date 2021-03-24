import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  userReg : FormGroup;
  submitCheck = false;

  constructor(private _fb : FormBuilder,private _http : HttpClient) {
    this.userReg = this._fb.group({
      name : ["", Validators.required],
      
      city : ["", Validators.required],
      
      image : ["", Validators.required]
    })
   }

  ngOnInit() {
  }

  save(image){
    this.submitCheck=true;
    if(this.userReg.invalid){
      return;
    }
    // console.log(image.files[0]);
    let form = new FormData();
    form.append("image", image.files[0]);
    // form.append("name", this.userReg.value.name);
    // form.append("city", this.userReg.value.city);
    form.append("formdata", JSON.stringify(this.userReg.value));

    // we have to convert object to string
    

    this._http.post<any>("http://localhost:3000/api/add", form).subscribe((result)=>{
      console.log(result);
    })
   
   
  }

}
