import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product : FormGroup;
  isSubmit = false;
  id;
  constructor(private _fb : FormBuilder, private _actRoute : ActivatedRoute, private _proServ : ProductService) {
    this.product = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      price : [null, Validators.required],
      discount : [null, Validators.required],
      detail : ["", Validators.required],
      category : ["", Validators.required],
    });

    this.id =this._actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this._proServ.get(this.id).subscribe((result)=>{
      // console.log(result);
      this.product.setValue(result);
    })
  }
  submit(){
    this.isSubmit = true;
    if(this.product.invalid){
      return;
    }
    console.log(this.product.value);
  }

}
