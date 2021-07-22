import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BuyHomeComponent } from './buy-home/buy-home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RentalsComponent } from './rentals/rentals.component';
import { SellHomeComponent } from './sell-home/sell-home.component';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component: HomepageComponent},
  {path:'sellHome',component:SellHomeComponent},
  {path:'buyHome',component:BuyHomeComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'rentals',component:RentalsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
