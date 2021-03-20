import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { InfoComponent } from './pages/info/info.component';


@NgModule({
  declarations: [CustomerComponent, InfoComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
