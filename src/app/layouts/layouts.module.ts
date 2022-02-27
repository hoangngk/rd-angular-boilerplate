import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [BlankLayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [BlankLayoutComponent],
})
export class LayoutsModule {}
