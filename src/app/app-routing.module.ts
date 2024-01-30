import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./AllBooks/allbooks.module').then((m) => m.AllbooksModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./IssuedBooks/issuedbooks.module').then(
        (m) => m.IssuedbooksModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
