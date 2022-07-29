import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlComponent } from './access-control.component';
import { RouterModule } from '@angular/router';
import { Routes } from './access-control.routing';
import { PermissionsComponent } from './permissions/permissions.component';
@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild(Routes)],
    declarations: [AccessControlComponent, PermissionsComponent],
})
export class AccessControlModule {}
