import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { StaffDataComponent } from './staff-data/staff-data.component';
import { StaffRoutes } from './staff.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    StaffRoutes
  ],
  declarations: [
    StaffComponent,
    StaffDataComponent,
    StaffDetailComponent
  ],
  entryComponents: [StaffDataComponent]
})
export class StaffModule { }
