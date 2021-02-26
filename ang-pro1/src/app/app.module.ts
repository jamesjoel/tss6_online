import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DemoComponent } from './pages/demo/demo.component';
import { MiniSharedComponent } from './shared/mini-shared/mini-shared.component';
import { MiniBoxComponent } from './shared/mini-box/mini-box.component';
import { Demo2Component } from './pages/demo2/demo2.component';
import { StudentboxComponent } from './shared/studentbox/studentbox.component';
import { Demo3Component } from './pages/demo3/demo3.component';
import { Demo3MiniComponent } from './shared/demo3-mini/demo3-mini.component';


@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    EmployeeComponent,
    DemoComponent,
    MiniSharedComponent,
    MiniBoxComponent,
    Demo2Component,
    StudentboxComponent,
    Demo3Component,
    Demo3MiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
