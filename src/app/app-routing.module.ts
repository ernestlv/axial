import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path:'', redirectTo: '/input', pathMatch: 'full'},
  { path:'input', component: InputComponent },
  { path:'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
