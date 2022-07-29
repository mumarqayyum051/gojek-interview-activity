import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlComponent } from './access-control.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AccessControlComponent]
})
export class AccessControlModule { }
