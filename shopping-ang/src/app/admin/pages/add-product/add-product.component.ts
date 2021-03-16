import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product : FormGroup;
  isSubmit = false;
  showMsg;
  constructor(private _fb : FormBuilder, private _proServ : ProductService) {
    this.product = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      price : [null, Validators.required],
      discount : [null, Validators.required],
      detail : ["", Validators.required],
      category : ["", Validators.required],
    })
   }

  ngOnInit() {
  }
  submit(){
    this.isSubmit = true;
    if(this.product.invalid){
      return;
    }
    //console.log(this.product.value);
    this._proServ.add(this.product.value).subscribe((result)=>{
      if(result){
        this.showMsg = true;
        this.product.setValue({
          _id : "",
          name : "",
          price : null,
          discount : null,
          category : "",
          detail : ""
        });
        this.isSubmit = false;
      }
    })
    
  }

}
