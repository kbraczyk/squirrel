import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedSquirrelModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedSquirrelModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }