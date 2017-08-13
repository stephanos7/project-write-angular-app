import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
