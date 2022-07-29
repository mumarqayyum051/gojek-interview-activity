import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from './material.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatNativeDateModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatNativeDateModule,
    ],
})
export class SharedModule {}
