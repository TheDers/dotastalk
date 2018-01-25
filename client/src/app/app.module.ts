import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { environment } from '../environments/environment';
import { OpenDotaModule } from './open-dota/module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    OpenDotaModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    ServiceWorkerModule.register('/ngsw-worker.js',
      { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
