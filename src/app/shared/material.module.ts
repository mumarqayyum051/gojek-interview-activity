import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
    ],
})
export class MaterialModule {}
