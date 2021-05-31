import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';



@NgModule({
  declarations: [
    DetailPageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
