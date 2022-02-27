import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListPage } from './pages/product-list/product-list.page';

@NgModule({
  declarations: [
    ProductListPage
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListPage
  ]
})
export class ProductsModule { }
