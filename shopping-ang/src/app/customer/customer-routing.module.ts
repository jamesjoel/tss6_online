import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { InfoComponent } from './pages/info/info.component';


const routes: Routes = [
  {
    path : "",
    component : CustomerComponent,
    children : [
      {
        path : "",
        component : InfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
