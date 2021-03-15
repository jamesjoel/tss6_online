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
  tempCategory;

  constructor(private _fb : FormBuilder, private _cateServe : CategoryService) {
    this.category = this._fb.group({
      _id : [""],
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
    if(this.category.value._id)
    {
      this._cateServe.update(this.category.value, this.category.value._id).subscribe((result)=>{
        // console.log(result);
        for(let i = 0; i < this.allCategory.length; i++)
        {
          if(this.allCategory[i]._id == this.category.value._id)
          {
            this.allCategory[i] = this.category.value;
          }
        }


        this.category.setValue({
          _id : "",
          name : ""
        })
        this.isSubmit = false;
      })
    }
    else{

      this._cateServe.add(this.category.value).subscribe((result)=>{
        this.allCategory.push(result);
        this.category.setValue({
          _id : "",
          name : ""
        }) // category object should be null after add category
        this.isSubmit = false;
      })
    }



  }

  askDelete(obj){
    this.tempCategory = obj;
  }
  delete(){
    this._cateServe.delete(this.tempCategory._id).subscribe((result)=>{
      // console.log(result);
      let n = this.allCategory.indexOf(this.tempCategory);
      this.allCategory.splice(n, 1);
    })
  }

  askEdit(obj){
    // this.category = {... obj}
    this.category.setValue(obj);
  }
  edit_cancel(){
    this.category.setValue({
      _id : "",
      name : ""
    })
  }

}
