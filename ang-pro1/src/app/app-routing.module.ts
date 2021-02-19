import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  {
    path : "", // localhost:4200
    component : HomeComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "about", // localhost:4200/about
    component : AboutComponent
  },
  {
    path : "contact", // localhost:4200/contact
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "demo",
    component : DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// var express = require("express");

// import { express } from 'express';

/*
app-button
app-h1


*/