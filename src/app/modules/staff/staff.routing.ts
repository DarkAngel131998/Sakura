import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { StaffDataComponent } from './staff-data/staff-data.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

const routes: Routes = [
  { path: '', component: StaffComponent },
  { path: 'add', component: StaffDataComponent },
  { path: 'edit/:id', component: StaffDataComponent },
  { path: 'detail/:id', component: StaffDetailComponent}
];

export const StaffRoutes = RouterModule.forChild(routes);
