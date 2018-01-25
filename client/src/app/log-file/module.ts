import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogFileDirective } from './directive';


const EXPORTS_DECLARE = [LogFileDirective];


@NgModule({
  exports: [...EXPORTS_DECLARE], // exposing components to other modules.
  declarations: [...EXPORTS_DECLARE], // for components.
})
export class LogFileModule {
}
