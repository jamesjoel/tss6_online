import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
  obj={
    name : "",

  }


*/

const routes: Routes = [
  {
    path : "",
    
    loadChildren : ()=> import("./user/user.module").then(module1 => module1.UserModule)
    // lazy loading
  },
  {
    path : "admin",
    loadChildren : ()=> import('./admin/admin.module').then(module2 => module2.AdminModule)
  },
  {
    path : "customer",
    loadChildren : ()=>import('./customer/customer.module').then(module3 => module3.CustomerModule)
  },
  {
    path :"**",
    loadChildren : ()=> import("./user/user.module").then(module1 => module1.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
express().listen(3000, function()=>{

})

function demo(x){

}
req => req.body


*/
