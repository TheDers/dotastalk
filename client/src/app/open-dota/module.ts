import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OpenDotaService } from './service';
import { CommonModule } from '@angular/common';

const EXPORTS_DECLARE = [];

@NgModule({
  imports: [HttpClientModule, CommonModule], // more module
  exports: [...EXPORTS_DECLARE], // exposing components to other modules.
  declarations: [...EXPORTS_DECLARE], // for components.
  providers: [OpenDotaService], // services
})
export class OpenDotaModule {

}
