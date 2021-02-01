import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { SingleFormComponent } from './single-form/single-form.component';

const routes: Routes = [
  { path: 'single', component: SingleFormComponent },
  { path: 'multi', component: MultiFormComponent },
  { path: '', redirectTo: 'single', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
