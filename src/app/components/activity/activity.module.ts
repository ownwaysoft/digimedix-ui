import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ActivityComponent],
  imports: [CommonModule, ActivityRoutingModule, MaterialModule, MatMenuModule],
})
export class ActivityModule {}
