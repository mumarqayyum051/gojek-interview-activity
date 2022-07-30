import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FuseCardModule } from '@fuse/components/card';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { MaterialModule } from './material.module';
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatNativeDateModule,
        FuseDrawerModule,
        FuseCardModule,
    ],
})
export class SharedModule {}
