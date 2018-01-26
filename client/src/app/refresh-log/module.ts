import { NgModule } from '@angular/core';
import { LocalEndpointModule } from '../local-endpoints/module';

const EXPORTS_DECLARE = [RefreshLogDirective];

@NgModule({
  imports: [LocalEndpointModule],
  exports: [...EXPORTS_DECLARE], // exposing components to other modules.
  declarations: [...EXPORTS_DECLARE], // for components.
})
export class RefreshLogModule {
}
