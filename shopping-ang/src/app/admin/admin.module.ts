import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { LoginService } from './services/login.service';
import { UsersService } from './services/users.service';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [AdminComponent, LoginComponent, ProductComponent, CategoryComponent, HeaderComponent, FooterComponent, DashboardComponent, UserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers : [LoginService, UsersService]
})
export class AdminModule { }
