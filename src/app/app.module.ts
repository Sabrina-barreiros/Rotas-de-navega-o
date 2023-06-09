import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { MultTableDetailsComponent } from './mult-table-details/mult-table-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path:'multi-table', component: MultTableComponent},
      {path:'multi-table/:n', component: MultTableDetailsComponent},
      {path:'tasks', component: TasksComponent},
    ]),
  ],
  declarations: [RootComponent, HomeComponent, AboutComponent, MultTableComponent, MultTableDetailsComponent, NavbarComponent, TasksComponent],
  bootstrap: [RootComponent],
  providers: [TimerService]
})
export class AppModule { }