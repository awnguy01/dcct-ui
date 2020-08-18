import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from '../app/components/features/roster/roster.component';

const routes: Routes = [
  { path: 'roster', component: RosterComponent },
  { path: '**', redirectTo: 'roster' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
