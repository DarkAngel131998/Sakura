import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffDetailComponent } from './staff-detail.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ViewStaff } from '../interfaces/viewStaff';
import { StaffService } from '../staff.service';
@NgModule({
  imports: [
    CommonModule,
    NzTableModule
  ],
  declarations: [StaffDetailComponent, NzTableModule]
})
export class StaffDetailModule {
 }
