import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from "@app/home/home.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    MatButtonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
