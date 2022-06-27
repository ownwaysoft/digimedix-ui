import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share.component';

const routes: Routes = [
  {
    path: '', component: ShareComponent, data: { title: 'Share' }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
