import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category : FormGroup;
  allCategory = [];
  isSubmit = false;
  constructor(private _fb : FormBuilder, private _cateServe : CategoryService) {
    this.category = this._fb.group({
      
      name : ["", Validators.required]
    });
    this._cateServe.getAll().subscribe((result)=>{
      this.allCategory = result;
    })
   }

  ngOnInit() {
  }

  submit(){
    this.isSubmit = true;
    if(this.category.invalid){
      return;
    }
    //console.log(this.category.value);
    this._cateServe.add(this.category.value).subscribe((result)=>{
      // console.log(result);
      this.allCategory.push(result);
    })
  }

}
