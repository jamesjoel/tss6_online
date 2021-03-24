import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { InfoComponent } from './pages/info/info.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path : "",
    component : CustomerComponent,
    children : [
      {
        path : "",
        component : InfoComponent
      },
      {
        path : "add",
        component : AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
