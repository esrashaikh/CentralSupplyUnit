import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplyDocumentRoutingModule } from './supply-document-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataTableComponent } from './data-table/data-table.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    SupplyDocumentRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SupplyDocumentModule { }
