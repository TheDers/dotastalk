import { NgModule } from '@angular/core';
import { LocalEndpointService } from './service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


export const EXPORTS_DECLARE = [];


@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [...EXPORTS_DECLARE],
  declarations: [...EXPORTS_DECLARE],
  providers: [LocalEndpointService],
})
export class LocalEndpointModule {
}
