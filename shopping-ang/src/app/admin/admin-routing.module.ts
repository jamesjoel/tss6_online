import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import  { BackdoorGuard } from './guards/backdoor.guard';
import { UserComponent } from './pages/user/user.component';
 
const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "", // :4200/admin
        component : LoginComponent
      },
      {
        path : "dashboard",
        canActivate : [BackdoorGuard],
        component : DashboardComponent
      },
      {
        path : "product",
        canActivate : [BackdoorGuard],
        component : ProductComponent
      },
      {
        path : "category",
        canActivate : [BackdoorGuard],
        component : CategoryComponent
      },
      {
        path : "users",
        canActivate : [BackdoorGuard],
        component : UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
